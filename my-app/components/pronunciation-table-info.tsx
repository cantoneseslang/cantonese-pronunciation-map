import type React from "react"
import styled from "styled-components"
// Remove getPronunciationInfo import
import { getTableHeaders, pronunciationTable, consonantGroups } from "@/data/pronunciationTable"
import type { PronunciationTableCell } from "@/types/pronunciation-table"

interface PronunciationTableInfoProps {
  jyutping: string
}

// Helper function to get jyutping without tone
const getJyutpingWithoutTone = (jp: string): string => {
  return jp.replace(/[1-6]$/, "")
}

// Helper function to find pronunciation info (similar to CantoneseCard)
const findPronunciationInfo = (baseJyutping: string): { cell: PronunciationTableCell | null; initial: string; final: string } => {
  const { initialConsonants } = getTableHeaders();
  let foundInitial = "";
  let foundFinal = "";
  let foundCell: PronunciationTableCell | null = null;

  // Iterate through the table to find the matching cell and determine initial/final
  outerLoop: for (const finalKey in pronunciationTable.cells) {
    // Skip special keys if needed, or handle them separately
    if (finalKey === '母音なし') continue;

    for (const initialKey in pronunciationTable.cells[finalKey]) {
       // Skip special keys if needed
       if (initialKey === '子音なし') continue;

      const cell = pronunciationTable.cells[finalKey][initialKey];
      const cellBaseJyutping = cell ? getJyutpingWithoutTone(cell.jyutping) : '';

      if (cell && cellBaseJyutping === baseJyutping) {
        foundCell = cell;
        foundInitial = initialKey; // The key is the initial
        foundFinal = finalKey;     // The key is the final
        break outerLoop;
      }
    }
     // Check '子音なし' case for the current final
     const noInitialCell = pronunciationTable.cells[finalKey]['子音なし'];
     const noInitialBase = noInitialCell ? getJyutpingWithoutTone(noInitialCell.jyutping) : '';
     if (noInitialCell && noInitialBase === baseJyutping) {
         foundCell = noInitialCell;
         foundInitial = ""; // No initial consonant
         foundFinal = finalKey;
         break outerLoop;
     }
  }

   // Check '母音なし' case if not found yet
   if (!foundCell) {
       const noVowelCells = pronunciationTable.cells['母音なし'];
       if (noVowelCells) {
           for (const initialKey in noVowelCells) {
               const cell = noVowelCells[initialKey];
               const cellBaseJyutping = cell ? getJyutpingWithoutTone(cell.jyutping) : '';
               if (cell && cellBaseJyutping === baseJyutping) {
                   foundCell = cell;
                   foundInitial = initialKey;
                   foundFinal = ""; // No final vowel sound
                   break;
               }
           }
       }
   }


  // If still not found by exact match, try finding initial/final based on structure
  if (!foundCell) {
      // Find the longest matching initial consonant
      let matchedInitial = "";
      for (let i = initialConsonants.length - 1; i >= 0; i--) {
          const cons = initialConsonants[i];
          if (baseJyutping.startsWith(cons)) {
              matchedInitial = cons;
              break;
          }
      }
      foundInitial = matchedInitial;
      foundFinal = baseJyutping.substring(matchedInitial.length);

      // Attempt to find the cell again using derived initial/final (might be redundant if first loop was comprehensive)
      if (pronunciationTable.cells[foundFinal]?.[foundInitial]) {
          foundCell = pronunciationTable.cells[foundFinal][foundInitial];
      } else if (foundInitial === "" && pronunciationTable.cells[foundFinal]?.['子音なし']) {
           foundCell = pronunciationTable.cells[foundFinal]['子音なし'];
      } else if (foundFinal === "" && pronunciationTable.cells['母音なし']?.[foundInitial]) {
           foundCell = pronunciationTable.cells['母音なし'][foundInitial];
      }
  }


  return { cell: foundCell, initial: foundInitial, final: foundFinal };
}


const PronunciationTableInfo: React.FC<PronunciationTableInfoProps> = ({ jyutping }) => {
  const jyutpingBase = getJyutpingWithoutTone(jyutping);
  const { cell: info, initial, final } = findPronunciationInfo(jyutpingBase); // Use the helper function
  const headers = getTableHeaders();

  if (!info) {
      // Optionally return some default or error state if info is truly needed
      // For now, let's try to display initial/final even if cell is null
      // return null;
  }


  // Find consonant group info even if cell is null, based on derived initial
  let consonantGroup = "";
  let consonantFeature = "";
   if (initial) {
      // Use Object.keys for better type safety with object iteration
      const groupKeys = Object.keys(consonantGroups) as Array<keyof typeof consonantGroups>;
      for (const groupKey of groupKeys) {
          const group = consonantGroups[groupKey]; // groupKey is now known as a key
          // Ensure group and group.consonants exist before checking includes
          if (group?.consonants?.includes(initial)) {
              // Use 'in' operator for safer property access check
              if ('groupName' in group && group.groupName) {
                consonantGroup = group.groupName;
              } else {
                consonantGroup = groupKey; // Fallback to the key name
              }
              // Safely access features, asserting initial is a valid key if necessary,
              // or checking if the key exists. Using optional chaining is safer.
              // We assume 'initial' might correspond to a key in 'features'.
              const featureKey = initial as keyof typeof group.features;
              consonantFeature = group.features?.[featureKey] || "";
              break;
          }
      }
   }


  // 発音表での位置を計算 (Use derived initial/final)
  const initialIndex = headers.initialConsonants.indexOf(initial);
  const finalIndex = headers.finals.indexOf(final);


  // Use derived initial/final for display
  return (
    <TableInfoContainer color={info?.color}> {/* Use optional chaining for color */}
      <TablePosition>
        {final && <span className="final">{final}</span>}
        {initial && final && <span className="plus">+</span>} {/* Show plus only if both exist */}
        {initial && <span className="initial">{initial}</span>}
      </TablePosition>
      <TableCoordinates>
        {finalIndex >= 0 && initialIndex >= 0 && (
          <span>
            表内位置: {finalIndex + 1}行 {initialIndex + 1}列
          </span>
        )}
      </TableCoordinates>
    </TableInfoContainer>
  )
}

const TableInfoContainer = styled.div<{ color?: string }>`
  background-color: ${(props) => props.color || "#f5f5f5"};
  padding: 0.5em;
  border-radius: 0.3em;
  font-size: 0.8em;
  margin-top: 0.5em;
  text-align: center;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.1);
`

const TablePosition = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.3em;
  margin-bottom: 0.3em;
  
  .final {
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .initial {
    font-weight: bold;
    font-size: 1.2em;
  }
  
  .plus {
    opacity: 0.7;
  }
`

const TableCoordinates = styled.div`
  font-size: 0.75em;
  opacity: 0.8;
`

export default PronunciationTableInfo
