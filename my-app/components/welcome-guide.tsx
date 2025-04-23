"use client"

import React, { useState, useEffect, useMemo } from "react" // useMemo をインポート
import styled from "styled-components"
import { X } from "lucide-react"
import { pronunciationTable } from "@/data/pronunciationTable" // pronunciationTable をインポート

interface WelcomeGuideProps {
  onClose: () => void; // onClose プロパティを追加
}

interface GuideSection {
  title: string
  // content が関数である可能性も考慮
  content: React.ReactNode | ((totalCards: number) => React.ReactNode)
}

const guideSections: GuideSection[] = [
  {
    title: "使い方",
    content: (
      <>
        {/* 音声再生に関する注意書きを追加 */}
        <p style={{ color: '#ff6b6b', fontWeight: 'bold' }}>【重要】現在、一部の漢字で音声再生が正しく行われない問題を確認しています。対象: 揈(fing), 搲(we), 啤(pe), 掉(deu), 𠺫(leu), 嗒(dep), 夾(gep), 鋸(goe), 唾(toe), 嚕(lu), 嘰(gi), 眯(mi), 柮(deot)。ご不便をおかけしますが、修正まで今しばらくお待ちください。</p>
        <p>・ 表の各マス（セル）をクリックすると、その音に対応する漢字、発音記号（粤ピン / ユッ（トゥ）・ペン）、カタカナでの読み方ガイドが表示され、ネイティブスピーカーによる音声が再生されます。</p>
        <p>・ 表の色分けや配置は、子音（音の始まりの部分）の性質に基づいています。</p>
        {/* カタカナ表記に関する注釈を再追加し、PDFリンクも併記 */}
        <p style={{ marginTop: '1rem', opacity: 0.9 }}><strong>※カタカナ表記について:</strong> このカタカナは「スラング先生」が考案したもので、あくまで初心者が最初のイメージとして捉えやすいように近い音を当てたものです。<strong>最終的な目標は、漢字や発音記号（粤ピン）を見て正確な広東語の発音ができるようになることです。</strong></p>
        <p style={{ opacity: 0.9 }}>カタカナへの変換ルールの詳細は、こちらのPDFもご参照ください: <a href="https://drive.google.com/file/d/1j0pxZt3JYaG887jKJFJuYP_6Js1HqYKo/view?usp=sharing" target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda', textDecoration: 'underline' }}>カタカナ変換ルール (PDF)</a></p>
      </>
    ),
  },
  {
    title: "発音の分類について (表の見方)",
    content: (
      <>
        <p><strong>縦軸 (調音部位):</strong> 音を作る<strong>場所</strong>を示します。</p>
        <ul>
          <li><strong>両唇音 (りょうしんおん):</strong> 上下の唇を使って出す音 (例: b, p, m)</li>
          <li><strong>唇歯音 (しんしおん):</strong> 下唇と上の歯を使って出す音 (例: f)</li>
          <li><strong>歯茎音 (しけいおん):</strong> 舌先を上の歯茎あたりにつけて出す音 (例: d, t, n, l, z, c, s)</li>
          <li><strong>軟口蓋音 (なんこうがいおん):</strong> 舌の後ろの方を口の奥の柔らかい部分（軟口蓋）に近づけて出す音 (例: g, k, ng, h)</li>
          <li><strong>半母音 (はんぼいん):</strong> 母音に近いですが子音として扱われる音 (例: j, w)</li>
        </ul>
        <p><strong>横軸 (調音方法):</strong> 音を作る<strong>方法</strong>を示します。</p>
        <ul>
          <li><strong>破裂音 (はれつおん):</strong> 息を一度せき止めてから破裂させる音 (例: b, p, d, t, g, k)</li>
          <li><strong>鼻音 (びおん):</strong> 息を鼻に抜いて出す音 (例: m, n, ng)</li>
          <li><strong>摩擦音 (まさつおん):</strong> 息の通り道を狭めて摩擦させて出す音 (例: f, h, s)</li>
          <li><strong>側面接近音 (そくめんせっきんおん):</strong> 舌の側面から息を流して出す音 (例: l)</li>
          <li><strong>接近音 (せっきんおん):</strong> 息の通り道を狭めますが、摩擦はさせない音 (例: j, w)</li>
          <li><strong>破擦音 (はさつおん):</strong> 破裂音と摩擦音を組み合わせたような音 (例: z, c)</li>
        </ul>
        <p><strong>有気音・無気音:</strong> 広東語の破裂音や破擦音には、息を強く出す「有気音」(p, t, k, c) と、息を抑える「無気音」(b, d, g, z) の区別があり、意味を区別する上で重要です。</p>
      </>
    ),
  },
  {
    title: "広東語の発音の仕組み",
    // content を totalCards を受け取る関数として定義
    content: (totalCards: number) => (
      <>
        <p>・ 広東語の音節は、基本的に<strong>「子音（声母）」</strong>と<strong>「母音＋末尾子音（韻母）」</strong>の組み合わせで成り立っています。</p>
        {/* "マップ" を削除し、"音の数" に変更、総数を強調 */}
        <p>・ 広東語の基本的な発音を表す音の数は全部で <strong style={{ fontSize: '1.1em' }}>{totalCards}音</strong> 収録されています。これがあなたがマスターすべき音の総数です！</p>
        <p>・ 一つ一つの音を確実に習得していけば、ゴールは決して遠くありません。このマップを使って、効率的に発音練習を進めましょう。</p>
      </>
    ),
  },
  {
    title: "声調について",
    content: (
      <>
        <p>・ 広東語の大きな特徴の一つに<strong>「声調（せいちょう）」</strong>があります。これは音の高低や変化のパターンで、意味を区別する上で非常に重要です。</p>
        <p>・ 伝統的には9つの声調があるとされますが（<strong>九声</strong>）、現代広東語では主に6つの異なる音高パターン（<strong>六調</strong>）が区別されます。同じ「si」という音でも、声調が違うと「詩(si1)」「史(si2)」「試(si3)」「時(si4)」「市(si5)」「事(si6)」のように意味が変わります。</p>
        <p>・ 発音記号（粤ピン）の最後についている<strong>数字（1～6）</strong>が、この6つの主要な声調パターンを表しています。（入声と呼ばれる短い音節には、これらに対応する別の3つの声調がありますが、音の高さは1, 3, 6と同じです。）</p>
        <p>・ <strong>初心者の方へ:</strong> 最初は声調を難しく感じるかもしれません。まずは声調を意識しすぎず、<strong>それぞれの音の響きそのもの</strong>に慣れることから始めましょう。たくさんクリックして音を聞き、口の形を真似てみるのがおすすめです。</p>
        <p>・ 声調について詳しく学びたい方は、こちらの動画も参考にしてみてください: <a href="https://youtu.be/RAWZAJUrvOU?si=WFlKMNBYQHWS9mUY" target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda', textDecoration: 'underline' }}>広東語の声調解説動画 (YouTube)</a></p>
      </>
    ),
  },
  {
    title: "日本語話者向けのポイント",
    content: (
      <>
        <p>・ <strong>日本語にない音:</strong> 広東語には、日本語には存在しない音がたくさんあります。</p>
        <ul>
          <li><strong>子音:</strong> 例えば、「ng」から始まる音（例: 我 ngo5）、唇を丸める「gw」（例: 國 gwok3）や「kw」（例: 鄺 Kwong3）など。</li>
          <li><strong>母音/韻母:</strong> 「oe」（例: 香 hoeng1）、「eoi」（例: 水 seoi2）、「yu」（例: 魚 jyu4）なども日本語にはない響きです。</li>
        </ul>
        <p>・ <strong>息の強さ（有気音/無気音）:</strong> 「p, t, k, c」の音は、日本語の「パ、タ、カ、チャ」行よりも息を強く、はっきりと出して発音します（<strong>有気音</strong>）。一方、「b, d, g, z」は息を抑えて発音します（<strong>無気音</strong>）。この区別は広東語では非常に重要です。</p>
        <p>・ <strong>終わりの音（入声）:</strong> 「-p, -t, -k」で終わる音（例: 十 sap6, 八 baat3, 六 luk6）は、音を短く、詰まるように発音します（<strong>入声</strong>）。日本語の促音「っ」とは異なり、最後に唇や舌で息を完全に止めます。</p>
      </>
    ),
  },
  {
    title: "最後に",
    content: (
      <>
        <p>さあ、準備はいいですか？</p>
        <p>このマップにある音を全部マスターすれば、広東語の発音は完全にあなたのもの！</p>
        <p>繰り返し聞いて、どんどん声に出して真似してみてください。</p>
        <p><strong>一気に全ての音を制覇して、あなたも今日から広東語マスター！ 加油（ガーヤウ）！💪</strong></p>
      </>
    ),
  },
]

const LOCAL_STORAGE_KEY = "cantonesePronunciationMap_hideWelcomeGuide"

const WelcomeGuide: React.FC<WelcomeGuideProps> = ({ onClose }) => { // onClose を props から受け取る
  // isVisible state は不要になる (親コンポーネントで管理するため)
  // const [isVisible, setIsVisible] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)
  const [dontShowAgain, setDontShowAgain] = useState(false)

  // カードの総数を計算 (useMemoで計算結果をキャッシュ)
  const totalCards = useMemo(() => {
    let count = 0;
    for (const final in pronunciationTable.cells) {
      for (const initial in pronunciationTable.cells[final]) {
        // '子音なし' も考慮
        if (pronunciationTable.cells[final][initial]) {
          count++;
        }
      }
    }
    return count;
  }, []);


  // isVisible state がなくなったため、この useEffect は不要
  // useEffect(() => {
  //   const hideGuide = localStorage.getItem(LOCAL_STORAGE_KEY)
  //   if (hideGuide !== "true") {
  //     setIsVisible(true)
  //   }
  // }, [])

  useEffect(() => {
    if (dontShowAgain) {
      localStorage.setItem(LOCAL_STORAGE_KEY, "true")
    } else {
      localStorage.removeItem(LOCAL_STORAGE_KEY)
    }
  }, [dontShowAgain])

  const handleNext = () => {
    if (currentPage < guideSections.length - 1) {
      setCurrentPage(currentPage + 1)
    } else {
      handleClose() // 最後のページで「次へ」を押したら閉じる
    }
  }

  const handlePrev = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  // handleClose は props の onClose を呼び出すように変更
  const handleClose = () => {
    onClose(); // 親コンポーネントに通知
  }

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDontShowAgain(e.target.checked)
  }

  // isVisible state がなくなったため、このチェックは不要
  // if (!isVisible) {
  //   return null
  // }

  const currentSection = guideSections[currentPage]

  // content が関数なら実行し、そうでなければそのまま使う
  const sectionContent = typeof currentSection.content === 'function'
    ? currentSection.content(totalCards)
    : currentSection.content;


  return (
    <GuideOverlay>
      <GuideContainer>
        <CloseButton onClick={handleClose}>
          <X size={24} />
        </CloseButton>
        <MainTitle>スラング先生広東語カタカナ・粤ピン発音マップの使い方</MainTitle>
        <h2>{currentSection.title}</h2>
        <ContentArea>{sectionContent}</ContentArea> {/* 修正されたコンテンツを表示 */}
        <Footer>
          <CheckboxContainer>
            <input
              type="checkbox"
              id="dontShowAgain"
              checked={dontShowAgain}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="dontShowAgain">今後この説明を表示しない</label>
          </CheckboxContainer>
          <NavigationButtons>
            {currentPage > 0 && (
              <NavButton onClick={handlePrev}>前へ</NavButton>
            )}
            <NavButton onClick={handleNext}>
              {currentPage === guideSections.length - 1 ? "閉じる" : "次へ"}
            </NavButton>
          </NavigationButtons>
        </Footer>
      </GuideContainer>
    </GuideOverlay>
  )
}

const GuideOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001; /* クイズモードより手前に表示 */
`

const GuideContainer = styled.div`
  background-color: #1d3844; /* ベースの背景色に合わせる */
  color: white;
  padding: 2rem 3rem;
  border-radius: 10px;
  max-width: 800px;
  width: 90%;
  max-height: 80vh;

  @media (max-width: 768px) {
    padding: 1.5rem 1.5rem; /* パディングを縮小 */
    width: 95%;
    max-height: 85vh;
  }
  display: flex;
  flex-direction: column;
  position: relative;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);

  h2 {
    font-size: 1.8rem;
    margin-bottom: 1.5rem;
    color: #30d0c4; /* アクセントカラー */
    text-align: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding-bottom: 1rem;

    @media (max-width: 768px) {
      font-size: 1.5rem; /* フォントサイズを縮小 */
      margin-bottom: 1rem;
      padding-bottom: 0.8rem;
    }
  }
`

const MainTitle = styled.h1`
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem; /* フォントサイズを少し縮小 */
    margin-bottom: 1rem;
    padding-bottom: 0.8rem;
  }
  margin-bottom: 1.5rem;
  color: rgba(255, 255, 255, 0.9);
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.7);
  cursor: pointer;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
    color: white;
  }
`

const ContentArea = styled.div`
  flex-grow: 1;
  overflow-y: auto;
  margin-bottom: 1.5rem;
  padding-right: 1rem; /* スクロールバーのスペース */
  line-height: 1.7;

  p {
    margin-bottom: 1rem;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    list-style: disc;
  }

  li {
    margin-bottom: 0.5rem;
  }

  strong {
    color: #30d0c4; /* アクセントカラー */
    font-weight: bold;
  }

  /* スクロールバーのスタイル */
  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-track {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb {
    background: rgba(47, 158, 154, 0.7);
    border-radius: 4px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: rgb(47, 158, 154);
  }
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);

  @media (max-width: 768px) {
    flex-direction: column-reverse; /* 縦並び（ボタンが下）に変更 */
    gap: 1rem; /* 要素間のスペース */
    align-items: stretch; /* 幅を親要素に合わせる */
  }
`

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;

  input[type="checkbox"] {
    margin-right: 0.5rem;
    cursor: pointer;
    accent-color: #30d0c4; /* チェックボックスの色 */
  }

  label {
    font-size: 0.9rem;
    color: rgba(255, 255, 255, 0.8);
    cursor: pointer;
  }
`

const NavigationButtons = styled.div`
  display: flex;
  gap: 1rem;

  @media (max-width: 768px) {
    justify-content: center; /* ボタンを中央揃え */
  }
`

const NavButton = styled.button`
  background-color: rgb(47, 158, 154);
  color: white;
  border: none;
  padding: 0.7rem 1.5rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: rgb(57, 178, 174);
  }

  &:first-child:not(:last-child) { /* 前へボタン */
    background-color: rgba(255, 255, 255, 0.2);
    &:hover {
      background-color: rgba(255, 255, 255, 0.3);
    }
  }
`

export default WelcomeGuide
