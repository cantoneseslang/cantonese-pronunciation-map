import type { PronunciationTable, PronunciationTableCell } from "@/types/pronunciation-table"

// 子音グループごとの色
export const consonantColors: { [key: string]: string } = {
  b: "rgba(232, 245, 233, 0.8)", // 緑系
  p: "rgba(232, 245, 233, 0.8)",
  m: "rgba(232, 245, 233, 0.8)",
  f: "rgba(232, 245, 233, 0.8)",
  d: "rgba(248, 224, 224, 0.8)", // 赤系
  t: "rgba(248, 224, 224, 0.8)",
  n: "rgba(248, 224, 224, 0.8)",
  l: "rgba(248, 224, 224, 0.8)",
  g: "rgba(255, 248, 225, 0.8)", // 黄系
  k: "rgba(255, 248, 225, 0.8)",
  h: "rgba(255, 248, 225, 0.8)",
  z: "rgba(227, 242, 253, 0.8)", // 青系
  c: "rgba(227, 242, 253, 0.8)",
  s: "rgba(227, 242, 253, 0.8)",
  j: "rgba(224, 247, 250, 0.8)", // 水色系
  w: "rgba(224, 247, 250, 0.8)",
  ng: "rgba(255, 248, 225, 0.8)", // 黄系 (ng用)
  gw: "rgba(255, 248, 225, 0.8)", // 黄系 (gw用)
  kw: "rgba(255, 248, 225, 0.8)", // 黄系 (kw用)
}

// 子音グループの定義を追加
export const consonantGroups = {
  labial: {
    consonants: ["b", "p", "m"],
    features: {
      b: "無気音",
      p: "有気音",
      m: "鼻音"
    },
    groupName: "両唇音",
    articulationTypes: {
      "b,p": "破裂音",
      "m": "鼻音"
    }
  },
  labiodental: {
    consonants: ["f"],
    features: {
      f: "摩擦音"
    },
    groupName: "唇歯音",
    articulationTypes: {
      "f": "摩擦音"
    }
  },
  alveolar: {
    consonants: ["d", "t", "n", "l"],
    features: {
      d: "無気音",
      t: "有気音",
      n: "鼻音",
      l: "側面接近音"
    }
  },
  velar: {
    consonants: ["g", "gw", "k", "kw", "ng", "h"],
    features: {
      g: "無気音",
      gw: "無気音+唇音化",
      k: "有気音",
      kw: "有気音+唇音化",
      ng: "鼻音",
      h: "摩擦音"
    }
  },
  sibilant: {
    consonants: ["z", "c", "s"],
    features: {
      z: "無気音",
      c: "有気音",
      s: "摩擦音"
    }
  },
  semivowel: {
    consonants: ["j", "w"],
    features: {
      j: "硬口蓋接近音",
      w: "唇軟口蓋接近音"
    }
  }
}

// 子音の特徴を定義
export const consonantFeatures: { [key: string]: string[] } = {
  unaspirated: ["b", "d", "g", "gw", "z"],
  aspirated: ["p", "t", "k", "kw", "c"],
  nasal: ["m", "n", "ng"],
  fricative: ["f", "h", "s"],
  lateral: ["l"],
  semivowel: ["j", "w"]
}

// 簡略化した発音表データ（実際にはもっと多くのデータが必要です）
export const pronunciationTable: PronunciationTable = {
  initialConsonants: ["b", "p", "m", "f", "d", "t", "n", "l", "g", "gw", "k", "kw", "ng", "h", "z", "c", "s", "j", "w"],
  finals: [
    "aa", "aai", "aau", "aam", "aan", "aang", "aap", "aat", "aak",
    "a", "ai", "au", "am", "an", "ang", "ap", "at", "ak",
    "e", "ei", "eu", "em", "en", "eng", "ep", "et", "ek",
    // Removed duplicate "ei"
    "ing", "ik",
    "o", "oi", "on", "ong", "ot", "ok",
    "ou", "ung", "uk",
    "oe", "oeng", "oet", "oek",
    "eoi", "eon", "eot",
    "i", "iu", "im", "in", "ip", "it",
    "u", "ui", "um", "un", "ut",
    "yu", "yun", "yut", "母音なし"
  ],
  cells: {
    aa: {
      b: { jyutping: "baa", kanji: "巴", katakana: "バー", color: consonantColors.b },
      p: { jyutping: "paa", kanji: "趴", katakana: "パー", color: consonantColors.p },
      m: { jyutping: "maa", kanji: "媽", katakana: "マー", color: consonantColors.m },
      f: { jyutping: "faa", kanji: "花", katakana: "ファー", color: consonantColors.f },
      d: { jyutping: "daa", kanji: "打", katakana: "ダー", color: consonantColors.d },
      t: { jyutping: "taa", kanji: "他", katakana: "ター", color: consonantColors.t },
      n: { jyutping: "naa", kanji: "那", katakana: "ナー", color: consonantColors.n },
      l: { jyutping: "laa", kanji: "啦", katakana: "ラー", color: consonantColors.l },
      g: { jyutping: "gaa", kanji: "家", katakana: "ガー", color: consonantColors.g },
      gw: { jyutping: "gwaa", kanji: "瓜", katakana: "グァー", color: consonantColors.gw },
      k: { jyutping: "kaa", kanji: "卡", katakana: "カー", color: consonantColors.k },
      kw: { jyutping: "kwaa", kanji: "跨", katakana: "クァー", color: consonantColors.kw },
      ng: { jyutping: "ngaa", kanji: "牙", katakana: "ンアー", color: consonantColors.ng },
      h: { jyutping: "haa", kanji: "哈", katakana: "ハー", color: consonantColors.h },
      z: { jyutping: "zaa", kanji: "渣", katakana: "ジャー", color: consonantColors.z },
      c: { jyutping: "caa", kanji: "叉", katakana: "チャー", color: consonantColors.c },
      s: { jyutping: "saa", kanji: "沙", katakana: "サー", color: consonantColors.s },
      j: { jyutping: "jaa", kanji: "也", katakana: "ヤー", color: consonantColors.j },
      w: { jyutping: "waa", kanji: "蛙", katakana: "ワー", color: consonantColors.w },
      子音なし: { jyutping: "aa", kanji: "亞", katakana: "アー", color: consonantColors.b }
    },
    aai: {
      b: { jyutping: "baai", kanji: "擺", katakana: "バーイ", color: consonantColors.b },
      p: { jyutping: "paai", kanji: "牌", katakana: "パーイ", color: consonantColors.p },
      m: { jyutping: "maai", kanji: "買", katakana: "マーイ", color: consonantColors.m },
      f: { jyutping: "faai", kanji: "快", katakana: "ファーイ", color: consonantColors.f },
      d: { jyutping: "daai", kanji: "帶", katakana: "ダーイ", color: consonantColors.d },
      t: { jyutping: "taai", kanji: "太", katakana: "ターイ", color: consonantColors.t },
      n: { jyutping: "naai", kanji: "奶", katakana: "ナーイ", color: consonantColors.n },
      l: { jyutping: "laai", kanji: "拉", katakana: "ラーイ", color: consonantColors.l },
      g: { jyutping: "gaai", kanji: "街", katakana: "ガーイ", color: consonantColors.g },
      gw: { jyutping: "gwaai", kanji: "乖", katakana: "グァーイ", color: consonantColors.gw },
      k: { jyutping: "kaai", kanji: "楷", katakana: "カーイ", color: consonantColors.k },
      kw: { jyutping: "kwaai", kanji: "(壞)", katakana: "クァーイ", color: consonantColors.kw },
      ng: { jyutping: "ngaai", kanji: "崖", katakana: "ンアーイ", color: consonantColors.ng },
      h: { jyutping: "haai", kanji: "鞋", katakana: "ハーイ", color: consonantColors.h },
      z: { jyutping: "zaai", kanji: "債", katakana: "ジャーイ", color: consonantColors.z },
      c: { jyutping: "caai", kanji: "柴", katakana: "チャーイ", color: consonantColors.c },
      s: { jyutping: "saai", kanji: "徙", katakana: "サーイ", color: consonantColors.s },
      j: { jyutping: "jaai", kanji: "(踩)", katakana: "ヤーイ", color: consonantColors.j },
      w: { jyutping: "waai", kanji: "壞", katakana: "ワーイ", color: consonantColors.w },
      子音なし: { jyutping: "aai", kanji: "嗌", katakana: "アーイ", color: consonantColors.b }
    },
    aau: {
      b: { jyutping: "baau", kanji: "包", katakana: "バーウ", color: consonantColors.b },
      p: { jyutping: "paau", kanji: "拋", katakana: "パーウ", color: consonantColors.p },
      m: { jyutping: "maau", kanji: "貓", katakana: "マーウ", color: consonantColors.m },
      n: { jyutping: "naau", kanji: "鬧", katakana: "ナーウ", color: consonantColors.n },
      l: { jyutping: "laau", kanji: "撈", katakana: "ラーウ", color: consonantColors.l },
      g: { jyutping: "gaau", kanji: "膠", katakana: "ガーウ", color: consonantColors.g },
      k: { jyutping: "kaau", kanji: "靠", katakana: "カーウ", color: consonantColors.k },
      ng: { jyutping: "ngaau", kanji: "淆", katakana: "ンガーウ", color: consonantColors.ng },
      h: { jyutping: "haau", kanji: "敲", katakana: "ハーウ", color: consonantColors.h },
      z: { jyutping: "zaau", kanji: "找", katakana: "ジャーウ", color: consonantColors.z },
      c: { jyutping: "caau", kanji: "抄", katakana: "チャーウ", color: consonantColors.c },
      s: { jyutping: "saau", kanji: "稍", katakana: "サーウ", color: consonantColors.s },
      j: { jyutping: "jaau", kanji: "㕭", katakana: "ヤーウ", color: consonantColors.j },
      子音なし: { jyutping: "aau", kanji: "坳", katakana: "アーウ", color: consonantColors.b }
    },
    aam: {
      d: { jyutping: "daam", kanji: "擔", katakana: "ダーム", color: consonantColors.d },
      t: { jyutping: "taam", kanji: "貪", katakana: "ターム", color: consonantColors.t },
      n: { jyutping: "naam", kanji: "男", katakana: "ナーム", color: consonantColors.n },
      l: { jyutping: "laam", kanji: "藍", katakana: "ラーム", color: consonantColors.l },
      g: { jyutping: "gaam", kanji: "監", katakana: "ガーム", color: consonantColors.g },
      ng: { jyutping: "ngaam", kanji: "岩", katakana: "ンアーム", color: consonantColors.ng },
      h: { jyutping: "haam", kanji: "鹹", katakana: "ハーム", color: consonantColors.h },
      z: { jyutping: "zaam", kanji: "斬", katakana: "ジャーム", color: consonantColors.z },
      c: { jyutping: "caam", kanji: "慘", katakana: "チャーム", color: consonantColors.c },
      s: { jyutping: "saam", kanji: "三", katakana: "サーム", color: consonantColors.s },
      j: { jyutping: "jaam", kanji: "蘸", katakana: "ヤーム", color: consonantColors.j },
      子音なし: { jyutping: "aam", kanji: "啱", katakana: "アーム", color: consonantColors.b }
    },
    aan: {
      b: { jyutping: "baan", kanji: "班", katakana: "バーン(ヌ)", color: consonantColors.b },
      p: { jyutping: "paan", kanji: "盼", katakana: "パーン(ヌ)", color: consonantColors.p },
      m: { jyutping: "maan", kanji: "慢", katakana: "マーン(ヌ)", color: consonantColors.m },
      f: { jyutping: "faan", kanji: "反", katakana: "ファーン(ヌ)", color: consonantColors.f },
      d: { jyutping: "daan", kanji: "單", katakana: "ダーン(ヌ)", color: consonantColors.d },
      t: { jyutping: "taan", kanji: "攤", katakana: "ターン(ヌ)", color: consonantColors.t },
      n: { jyutping: "naan", kanji: "難", katakana: "ナーン(ヌ)", color: consonantColors.n },
      l: { jyutping: "laan", kanji: "蘭", katakana: "ラーン(ヌ)", color: consonantColors.l },
      g: { jyutping: "gaan", kanji: "間", katakana: "ガーン(ヌ)", color: consonantColors.g },
      gw: { jyutping: "gwaan", kanji: "慣", katakana: "グァーン(ヌ)", color: consonantColors.gw },
      k: { jyutping: "kaan", kanji: "(坎)", katakana: "カーン(ヌ)", color: consonantColors.k },
      ng: { jyutping: "ngaan", kanji: "眼", katakana: "ンアーン", color: consonantColors.ng },
      h: { jyutping: "haan", kanji: "限", katakana: "ハーン", color: consonantColors.h },
      z: { jyutping: "zaan", kanji: "讚", katakana: "ジャーン(ヌ)", color: consonantColors.z },
      c: { jyutping: "caan", kanji: "餐", katakana: "チャーン(ヌ)", color: consonantColors.c },
      s: { jyutping: "saan", kanji: "山", katakana: "サーン(ヌ)", color: consonantColors.s },
      w: { jyutping: "waan", kanji: "灣", katakana: "ワーン(ヌ)", color: consonantColors.w },
      子音なし: { jyutping: "aan", kanji: "晏", katakana: "アーン(ヌ)", color: consonantColors.b }
    },
    aang: {
      b: { jyutping: "baang", kanji: "嘭", katakana: "バーン(グ)", color: consonantColors.b },
      p: { jyutping: "paang", kanji: "棒", katakana: "パーン(グ)", color: consonantColors.p },
      m: { jyutping: "maang", kanji: "孟", katakana: "マーン(グ)", color: consonantColors.m },
      l: { jyutping: "laang", kanji: "冷", katakana: "ラーン(グ)", color: consonantColors.l },
      g: { jyutping: "gaang", kanji: "耕", katakana: "ガーン(グ)", color: consonantColors.g },
      gw: { jyutping: "gwaang", kanji: "(逛)", katakana: "グァーン(グ)", color: consonantColors.gw },
      kw: { jyutping: "kwaang", kanji: "逛", katakana: "クァーン(グ)", color: consonantColors.kw },
      ng: { jyutping: "ngaang", kanji: "硬", katakana: "ン(グ)アーン(グ)", color: consonantColors.ng },
      h: { jyutping: "haang", kanji: "坑", katakana: "ハァーン(グ)", color: consonantColors.h },
      z: { jyutping: "zaang", kanji: "踭", katakana: "ジャーン(グ)", color: consonantColors.z },
      c: { jyutping: "caang", kanji: "橙", katakana: "チャーン(グ)", color: consonantColors.c },
      s: { jyutping: "saang", kanji: "省", katakana: "サーン(グ)", color: consonantColors.s },
      j: { jyutping: "jaang", kanji: "𨅝", katakana: "ヤーン(グ)", color: consonantColors.j },
      w: { jyutping: "waang", kanji: "橫", katakana: "ワーン(グ)", color: consonantColors.w },
      子音なし: { jyutping: "aang", kanji: "罌", katakana: "アーン(グ)", color: consonantColors.b }
    },
    aap:{
      d: { jyutping: "daap", kanji: "搭", katakana: "ダープ", color: consonantColors.d },
      t: { jyutping: "taap", kanji: "塌", katakana: "タープ", color: consonantColors.t },
      n: { jyutping: "naap", kanji: "納", katakana: "ナープ", color: consonantColors.n },
      l: { jyutping: "laap", kanji: "立", katakana: "ラープ", color: consonantColors.l },
      g: { jyutping: "gaap", kanji: "鴿", katakana: "ガープ", color: consonantColors.g },
      ng: { jyutping: "ngaap", kanji: "(鴨)", katakana: "ンアープ", color: consonantColors.ng },
      h: { jyutping: "haap", kanji: "峽", katakana: "ハープ", color: consonantColors.h },
      z: { jyutping: "zaap", kanji: "閘", katakana: "ジャープ", color: consonantColors.z },
      c: { jyutping: "caap", kanji: "插", katakana: "チャープ", color: consonantColors.c },
      s: { jyutping: "saap", kanji: "圾", katakana: "サープ", color: consonantColors.s },
      j: { jyutping: "jaap", kanji: "擪", katakana: "ヤープ", color: consonantColors.j },
      子音なし: { jyutping: "aap", kanji: "鴨", katakana: "アープ", color: consonantColors.b }
    },
    aat:{
      b: { jyutping: "baat", kanji: "八", katakana: "バーッ(トゥ)", color: consonantColors.b },
      m: { jyutping: "maat", kanji: "抹", katakana: "マーッ(トゥ)", color: consonantColors.m },
      f: { jyutping: "faat", kanji: "發", katakana: "ファーッ(トゥ)", color: consonantColors.f },
      d: { jyutping: "daat", kanji: "達", katakana: "ダーッ(トゥ)", color: consonantColors.d },
      t: { jyutping: "taat", kanji: "撻", katakana: "ターッ(トゥ)", color: consonantColors.t },
      n: { jyutping: "naat", kanji: "焫", katakana: "ナーッ(トゥ)", color: consonantColors.n },
      l: { jyutping: "laat", kanji: "辣", katakana: "ラーッ(トゥ)", color: consonantColors.l },
      g: { jyutping: "gaat", kanji: "曱", katakana: "ガーッ(トゥ)", color: consonantColors.g },
      gw: { jyutping: "gwaat", kanji: "刮", katakana: "グァーッ(トゥ)", color: consonantColors.gw },
      k: { jyutping: "kaat", kanji: "咭", katakana: "カーッ(トゥ)", color: consonantColors.k },
      ng: { jyutping: "ngaat", kanji: "(餲)", katakana: "ンアー（トゥ）", color: consonantColors.ng },
      h: { jyutping: "haat", kanji: "乞", katakana: "ハーッ(トゥ)", color: consonantColors.h },
      z: { jyutping: "zaat", kanji: "紮", katakana: "ジャーッ(トゥ)", color: consonantColors.z },
      c: { jyutping: "caat", kanji: "冊", katakana: "チャーッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "saat", kanji: "殺", katakana: "サーッ(トゥ)", color: consonantColors.s },
      w: { jyutping: "waat", kanji: "滑", katakana: "ワーッ(トゥ)", color: consonantColors.w },
      子音なし: { jyutping: "aat", kanji: "壓", katakana: "アーッ(トゥ)", color: consonantColors.b }
    },
    aak:{
      b: { jyutping: "baak", kanji: "百", katakana: "バーッ(ク)", color: consonantColors.b },
      p: { jyutping: "paak", kanji: "拍", katakana: "パーッ(ク)", color: consonantColors.p },
      m: { jyutping: "maak", kanji: "擘", katakana: "マーッ(ク)", color: consonantColors.m },
      f: { jyutping: "faak", kanji: "𢪎", katakana: "ファーッ(ク)", color: consonantColors.f },
      d: { jyutping: "daak", kanji: "嘚", katakana: "ダーッ(ク)", color: consonantColors.d },
      l: { jyutping: "laak", kanji: "勒", katakana: "ラーッ(ク)", color: consonantColors.l },
      g: { jyutping: "gaak", kanji: "格", katakana: "ガーッ(ク)", color: consonantColors.g },
      gw: { jyutping: "gwaak", kanji: "摑", katakana: "グァーッ(ク)", color: consonantColors.gw },
      ng: { jyutping: "ngaak", kanji: "額", katakana: "ンアーッ(ク)", color: consonantColors.ng },
      h: { jyutping: "haak", kanji: "黑", katakana: "ハーッ(ク)", color: consonantColors.h },
      z: { jyutping: "zaak", kanji: "宅", katakana: "ジャーッ(ク)", color: consonantColors.z },
      c: { jyutping: "caak", kanji: "冊", katakana: "チャーッ(ク)", color: consonantColors.c },
      s: { jyutping: "saak", kanji: "(索)", katakana: "サーッ(ク)", color: consonantColors.s },
      j: { jyutping: "jaak", kanji: "喫", katakana: "ヤーッ(ク)", color: consonantColors.j },
      w: { jyutping: "waak", kanji: "畫", katakana: "ワーッ(ク)", color: consonantColors.w },
      子音なし: { jyutping: "aak", kanji: "厄", katakana: "アーッ(ク)", color: consonantColors.b }
    },
    a:{
      l: { jyutping: "la", kanji: "喇", katakana: "ラ", color: consonantColors.l },
      g: { jyutping: "ga", kanji: "㗎", katakana: "ガ", color: consonantColors.g },
      子音なし: { jyutping: "a", kanji: "(十)", katakana: "ア", color: consonantColors.b }
    },
    e: {
      b: { jyutping: "be", kanji: "啤", katakana: "べー", color: consonantColors.b },
      p: { jyutping: "pe", kanji: "啤", katakana: "ペー", color: consonantColors.p },
      m: { jyutping: "me", kanji: "咩", katakana: "メー", color: consonantColors.m },
      f: { jyutping: "fe", kanji: "啡", katakana: "フェー", color: consonantColors.f },
      d: { jyutping: "de", kanji: "爹", katakana: "デー", color: consonantColors.d },
      n: { jyutping: "ne", kanji: "呢", katakana: "ネー", color: consonantColors.n },
      l: { jyutping: "le", kanji: "呢", katakana: "レー", color: consonantColors.l },
      g: { jyutping: "ge", kanji: "嘅", katakana: "ゲー", color: consonantColors.g },
      gw: { jyutping: "gwe", kanji: "𠺌", katakana: "グェー", color: consonantColors.gw },
      k: { jyutping: "ke", kanji: "茄", katakana: "ケー", color: consonantColors.k },
      ng: { jyutping: "nge", kanji: "〓", katakana: "ケ゚ー", color: consonantColors.ng },
      h: { jyutping: "he", kanji: "hea", katakana: "ヘー", color: consonantColors.h },
      z: { jyutping: "ze", kanji: "遮", katakana: "ジェー", color: consonantColors.z },
      c: { jyutping: "ce", kanji: "車", katakana: "チェー", color: consonantColors.c },
      s: { jyutping: "se", kanji: "些", katakana: "セー", color: consonantColors.s },
      j: { jyutping: "je", kanji: "爺", katakana: "イェー", color: consonantColors.j },
      w: { jyutping: "we", kanji: "搲", katakana: "ウェー", color: consonantColors.w },
      子音なし: { jyutping: "e", kanji: "誒", katakana: "エー", color: consonantColors.b }
    },
    ai: {
      b: { jyutping: "bai", kanji: "弊", katakana: "バイ", color: consonantColors.b },
      p: { jyutping: "pai", kanji: "批", katakana: "パイ", color: consonantColors.p },
      m: { jyutping: "mai", kanji: "米", katakana: "マイ", color: consonantColors.m },
      f: { jyutping: "fai", kanji: "輝", katakana: "ファイ", color: consonantColors.f },
      d: { jyutping: "dai", kanji: "低", katakana: "ダイ", color: consonantColors.d },
      t: { jyutping: "tai", kanji: "梯", katakana: "タイ", color: consonantColors.t },
      n: { jyutping: "nai", kanji: "泥", katakana: "ナイ", color: consonantColors.n },
      l: { jyutping: "lai", kanji: "黎", katakana: "ライ", color: consonantColors.l },
      g: { jyutping: "gai", kanji: "雞", katakana: "ガイ", color: consonantColors.g },
      gw: { jyutping: "gwai", kanji: "龜", katakana: "グァイ", color: consonantColors.gw },
      k: { jyutping: "kai", kanji: "溪", katakana: "カイ", color: consonantColors.k },
      kw: { jyutping: "kwai", kanji: "虧", katakana: "クァイ", color: consonantColors.kw },
      ng: { jyutping: "ngai", kanji: "危", katakana: "ンアイ", color: consonantColors.ng },
      h: { jyutping: "hai", kanji: "係", katakana: "ハイ", color: consonantColors.h },
      z: { jyutping: "zai", kanji: "仔", katakana: "ジャイ", color: consonantColors.z },
      c: { jyutping: "cai", kanji: "妻", katakana: "チャイ", color: consonantColors.c },
      s: { jyutping: "sai", kanji: "西", katakana: "サイ", color: consonantColors.s },
      j: { jyutping: "jai", kanji: "曳", katakana: "ヤイ", color: consonantColors.j },
      w: { jyutping: "wai", kanji: "威", katakana: "ワイ", color: consonantColors.w },
      子音なし: { jyutping: "ai", kanji: "矮", katakana: "アイ", color: consonantColors.b },
    },
    au: {
      b: { jyutping: "bau", kanji: "〓", katakana: "バウ", color: consonantColors.b },
      p: { jyutping: "pau", kanji: "婄", katakana: "パウ", color: consonantColors.p },
      m: { jyutping: "mau", kanji: "某", katakana: "マウ", color: consonantColors.m },
      f: { jyutping: "fau", kanji: "否", katakana: "ファウ", color: consonantColors.f },
      d: { jyutping: "dau", kanji: "兜", katakana: "ダウ", color: consonantColors.d },
      t: { jyutping: "tau", kanji: "偷", katakana: "タウ", color: consonantColors.t },
      n: { jyutping: "nau", kanji: "嬲", katakana: "ナウ", color: consonantColors.n },
      l: { jyutping: "lau", kanji: "樓", katakana: "ラウ", color: consonantColors.l },
      g: { jyutping: "gau", kanji: "九", katakana: "ガウ", color: consonantColors.g },
      k: { jyutping: "kau", kanji: "溝", katakana: "カウ", color: consonantColors.k },
      ng: { jyutping: "ngau", kanji: "牛", katakana: "ンアウ", color: consonantColors.ng },
      h: { jyutping: "hau", kanji: "猴", katakana: "ハウ", color: consonantColors.h },
      z: { jyutping: "zau", kanji: "走", katakana: "ジャウ", color: consonantColors.z },
      c: { jyutping: "cau", kanji: "臭", katakana: "チャウ", color: consonantColors.c },
      s: { jyutping: "sau", kanji: "手", katakana: "サウ", color: consonantColors.s },
      j: { jyutping: "jau", kanji: "休", katakana: "ヤウ", color: consonantColors.j },
      子音なし: { jyutping: "au", kanji: "歐", katakana: "アウ", color: consonantColors.b },
    },
    am: {
      b: { jyutping: "bam", kanji: "泵", katakana: "バム", color: consonantColors.b },
      m: { jyutping: "mam", kanji: "𩜠", katakana: "マム", color: consonantColors.m },
      d: { jyutping: "dam", kanji: "抌", katakana: "ダム", color: consonantColors.d },
      t: { jyutping: "tam", kanji: "氹", katakana: "タム", color: consonantColors.t },
      n: { jyutping: "nam", kanji: "諗", katakana: "ナム", color: consonantColors.n },
      l: { jyutping: "lam", kanji: "林", katakana: "ラム", color: consonantColors.l },
      g: { jyutping: "gam", kanji: "金", katakana: "ガム", color: consonantColors.g },
      k: { jyutping: "kam", kanji: "琴", katakana: "カム", color: consonantColors.k },
      ng: { jyutping: "ngam", kanji: "扲", katakana: "ンアム", color: consonantColors.ng },
      h: { jyutping: "ham", kanji: "含", katakana: "ハム", color: consonantColors.h },
      z: { jyutping: "zam", kanji: "針", katakana: "ジャム", color: consonantColors.z },
      c: { jyutping: "cam", kanji: "侵", katakana: "チャム", color: consonantColors.c },
      s: { jyutping: "sam", kanji: "心", katakana: "サム", color: consonantColors.s },
      j: { jyutping: "jam", kanji: "音", katakana: "ヤム", color: consonantColors.j },
      子音なし: { jyutping: "am", kanji: "龕", katakana: "アム", color: consonantColors.b },
    },
    an: {
      b: { jyutping: "ban", kanji: "笨", katakana: "バン(ヌ)", color: consonantColors.b },
      p: { jyutping: "pan", kanji: "噴", katakana: "パン(ヌ)", color: consonantColors.p },
      m: { jyutping: "man", kanji: "聞", katakana: "マン(ヌ)", color: consonantColors.m },
      f: { jyutping: "fan", kanji: "分", katakana: "ファン(ヌ)", color: consonantColors.f },
      d: { jyutping: "dan", kanji: "墩", katakana: "ダン(ヌ)", color: consonantColors.d },
      t: { jyutping: "tan", kanji: "吞", katakana: "タン(ヌ)", color: consonantColors.t },
      n: { jyutping: "nan", kanji: "撚", katakana: "ナン(ヌ)", color: consonantColors.n },
      l: { jyutping: "lan", kanji: "𨶙", katakana: "ラン(ヌ)", color: consonantColors.l },
      g: { jyutping: "gan", kanji: "斤", katakana: "ガン(ヌ)", color: consonantColors.g },
      gw: { jyutping: "gwan", kanji: "君", katakana: "グァン(ヌ)", color: consonantColors.gw },
      k: { jyutping: "kan", kanji: "勤", katakana: "カン(ヌ)", color: consonantColors.k },
      kw: { jyutping: "kwan", kanji: "昆", katakana: "クァン(ヌ)", color: consonantColors.kw },
      ng: { jyutping: "ngan", kanji: "銀", katakana: "ンアン(ヌ)", color: consonantColors.ng },
      h: { jyutping: "han", kanji: "痕", katakana: "ハン", color: consonantColors.h },
      z: { jyutping: "zan", kanji: "真", katakana: "ジャン(ヌ)", color: consonantColors.z },
      c: { jyutping: "can", kanji: "親", katakana: "チャン(ヌ)", color: consonantColors.c },
      s: { jyutping: "san", kanji: "新", katakana: "サン(ヌ)", color: consonantColors.s },
      j: { jyutping: "jan", kanji: "人", katakana: "ヤン(ヌ)", color: consonantColors.j },
      w: { jyutping: "wan", kanji: "温", katakana: "ワン(ヌ)", color: consonantColors.w },
      子音なし: { jyutping: "an", kanji: "奀", katakana: "アン(ヌ)", color: consonantColors.b },
    },
    ang: { // Renamed from anh to ang based on pronunciationTable.ts
      b: { jyutping: "bang", kanji: "崩", katakana: "バン(グ)", color: consonantColors.b },
      p: { jyutping: "pang", kanji: "朋", katakana: "パン(グ)", color: consonantColors.p },
      m: { jyutping: "mang", kanji: "盟", katakana: "マン(グ)", color: consonantColors.m },
      f: { jyutping: "fang", kanji: "揈", katakana: "ファン(グ)", color: consonantColors.f },
      d: { jyutping: "dang", kanji: "燈", katakana: "ダン(グ)", color: consonantColors.d },
      t: { jyutping: "tang", kanji: "騰", katakana: "タン(グ)", color: consonantColors.t },
      n: { jyutping: "nang", kanji: "能", katakana: "ナン(グ)", color: consonantColors.n },
      l: { jyutping: "lang", kanji: "掕", katakana: "ラン(グ)", color: consonantColors.l },
      g: { jyutping: "gang", kanji: "梗", katakana: "ガン(グ)", color: consonantColors.g },
      gw: { jyutping: "gwang", kanji: "轟", katakana: "グァン(グ)", color: consonantColors.gw },
      k: { jyutping: "kang", kanji: "啃", katakana: "カン(グ)", color: consonantColors.k },
      kw: { jyutping: "kwang", kanji: "〓", katakana: "クァン(グ)", color: consonantColors.kw },
      ng: { jyutping: "ngang", kanji: "(哽)", katakana: "ン(グ)アン(グ)", color: consonantColors.ng },
      h: { jyutping: "hang", kanji: "肯", katakana: "ハン(グ)", color: consonantColors.h },
      z: { jyutping: "zang", kanji: "增", katakana: "ジャン(グ)", color: consonantColors.z },
      c: { jyutping: "cang", kanji: "層", katakana: "チャン(グ)", color: consonantColors.c },
      s: { jyutping: "sang", kanji: "擤", katakana: "サン(グ)", color: consonantColors.s },
      w: { jyutping: "wang", kanji: "宏", katakana: "ワン(グ)", color: consonantColors.w },
      子音なし: { jyutping: "ang", kanji: "哽", katakana: "アン(グ)", color: consonantColors.b },
    },
    ap: {
      d: { jyutping: "dap", kanji: "耷", katakana: "ダプ", color: consonantColors.d },
      t: { jyutping: "tap", kanji: "佮", katakana: "タプ", color: consonantColors.t },
      n: { jyutping: "nap", kanji: "凹", katakana: "ナプ", color: consonantColors.n },
      l: { jyutping: "lap", kanji: "笠", katakana: "ラプ", color: consonantColors.l },
      g: { jyutping: "gap", kanji: "急", katakana: "ガプ", color: consonantColors.g },
      k: { jyutping: "kap", kanji: "給", katakana: "カプ", color: consonantColors.k },
      ng: { jyutping: "ngap", kanji: "罨", katakana: "ンアプ", color: consonantColors.ng },
      h: { jyutping: "hap", kanji: "恰", katakana: "ハプ", color: consonantColors.h },
      z: { jyutping: "zap", kanji: "汁", katakana: "ジャプ", color: consonantColors.z },
      c: { jyutping: "cap", kanji: "輯", katakana: "チャプ", color: consonantColors.c },
      s: { jyutping: "sap", kanji: "濕", katakana: "サプ", color: consonantColors.s },
      j: { jyutping: "jap", kanji: "泣", katakana: "ヤプ", color: consonantColors.j },
      子音なし: { jyutping: "ap", kanji: "噏", katakana: "アプ", color: consonantColors.b },
    },
    at: {
      b: { jyutping: "bat", kanji: "不", katakana: "バッ(トゥ)", color: consonantColors.b },
      p: { jyutping: "pat", kanji: "匹", katakana: "パッ(トゥ)", color: consonantColors.p },
      m: { jyutping: "mat", kanji: "物", katakana: "マッ(トゥ)", color: consonantColors.m },
      f: { jyutping: "fat", kanji: "弗", katakana: "ファッ(トゥ)", color: consonantColors.f },
      d: { jyutping: "dat", kanji: "凸", katakana: "ダッ(トゥ)", color: consonantColors.d },
      l: { jyutping: "lat", kanji: "甩", katakana: "ラッ(トゥ)", color: consonantColors.l },
      g: { jyutping: "gat", kanji: "吉", katakana: "ガッ(トゥ)", color: consonantColors.g },
      gw: { jyutping: "gwat", kanji: "骨", katakana: "グァッ(トゥ)", color: consonantColors.gw },
      k: { jyutping: "kat", kanji: "咳", katakana: "カッ(トゥ)", color: consonantColors.k },
      ng: { jyutping: "ngat", kanji: "兀", katakana: "ンアッ(トゥ)", color: consonantColors.ng },
      h: { jyutping: "hat", kanji: "核", katakana: "ハッ(トゥ)", color: consonantColors.h },
      z: { jyutping: "zat", kanji: "質", katakana: "ジャッ(トゥ)", color: consonantColors.z },
      c: { jyutping: "cat", kanji: "七", katakana: "チャッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "sat", kanji: "失", katakana: "サッ(トゥ)", color: consonantColors.s },
      j: { jyutping: "jat", kanji: "日", katakana: "ヤッ(トゥ)", color: consonantColors.j },
      w: { jyutping: "wat", kanji: "屈", katakana: "ワッ(トゥ)", color: consonantColors.w },
      "子音なし": { jyutping: "at", kanji: "扤", katakana: "アッ(トゥ)", color: consonantColors.b }
    },
    ak: {
      b: { jyutping: "bak", kanji: "北", katakana: "バッ(ク)", color: consonantColors.b },
      m: { jyutping: "mak", kanji: "麥", katakana: "マッ(ク)", color: consonantColors.m }, // Update color
      d: { jyutping: "dak", kanji: "得", katakana: "ダッ(ク)", color: consonantColors.d }, // Update color
      n: { jyutping: "nak", kanji: "𪙛", katakana: "ナッ(ク)", color: consonantColors.n }, // Update color
      l: { jyutping: "lak", kanji: "(勒)", katakana: "ラッ(ク)", color: consonantColors.l }, // Update color
      gw: { jyutping: "gwak", kanji: "〓", katakana: "グァッ(ク)", color: consonantColors.gw }, // Update color
      k: { jyutping: "kak", kanji: "〓", katakana: "カッ(ク)", color: consonantColors.k }, // Update color
      ng: { jyutping: "ngak", kanji: "(握)", katakana: "ンアッ(ク)", color: consonantColors.ng }, // Update color
      h: { jyutping: "hak", kanji: "(黑)", katakana: "ハッ(ク)", color: consonantColors.h }, // Update color
      z: { jyutping: "zak", kanji: "則", katakana: "ジャッ(ク)", color: consonantColors.z }, // Update color
      c: { jyutping: "cak", kanji: "(測)", katakana: "チャッ(ク)", color: consonantColors.c }, // Update color
      s: { jyutping: "sak", kanji: "塞", katakana: "サッ(ク)", color: consonantColors.s }, // Update color
      "子音なし": { jyutping: "ak", kanji: "(厄)", katakana: "アッ(ク)", color: consonantColors.b }
    },
    e: {
      b: { jyutping: "be", kanji: "啤", katakana: "べー", color: consonantColors.b },
      p: { jyutping: "pe", kanji: "啤", katakana: "ペー", color: consonantColors.p },
      m: { jyutping: "me", kanji: "咩", katakana: "メー", color: consonantColors.m },
      f: { jyutping: "fe", kanji: "啡", katakana: "フェー", color: consonantColors.f },
      d: { jyutping: "de", kanji: "爹", katakana: "デー", color: consonantColors.d },
      n: { jyutping: "ne", kanji: "呢", katakana: "ネー", color: consonantColors.n },
      l: { jyutping: "le", kanji: "呢", katakana: "レー", color: consonantColors.l },
      g: { jyutping: "ge", kanji: "嘅", katakana: "ゲー", color: consonantColors.g },
      gw: { jyutping: "gwe", kanji: "𠺌", katakana: "グェー", color: consonantColors.gw },
      k: { jyutping: "ke", kanji: "茄", katakana: "ケー", color: consonantColors.k },
      ng: { jyutping: "nge", kanji: "〓", katakana: "ケ゚ー", color: consonantColors.ng },
      h: { jyutping: "he", kanji: "hea", katakana: "ヘー", color: consonantColors.h },
      z: { jyutping: "ze", kanji: "遮", katakana: "ジェー", color: consonantColors.z },
      c: { jyutping: "ce", kanji: "車", katakana: "チェー", color: consonantColors.c },
      s: { jyutping: "se", kanji: "些", katakana: "セー", color: consonantColors.s },
      j: { jyutping: "je", kanji: "爺", katakana: "イェー", color: consonantColors.j },
      w: { jyutping: "we", kanji: "搲", katakana: "ウェー", color: consonantColors.w },
      子音なし: { jyutping: "e", kanji: "誒", katakana: "エー", color: consonantColors.b }
    },
    eu:{
      b: { jyutping: "beu", kanji: "〓", katakana: "べーウ", color: consonantColors.b },
      p: { jyutping: "peu", kanji: "(泡)", katakana: "ペーウ", color: consonantColors.p },
      m: { jyutping: "meu", kanji: "喵", katakana: "メーウ", color: consonantColors.m },
      d: { jyutping: "deu", kanji: "掉", katakana: "デーウ", color: consonantColors.d },
      l: { jyutping: "leu", kanji: "𠺫", katakana: "レーウ", color: consonantColors.l },
      k: { jyutping: "keu", kanji: "𠵇", katakana: "ケーウ", color: consonantColors.k },
      z: { jyutping: "zeu", kanji: "𡁻", katakana: "ジェーウ", color: consonantColors.z },
      s: { jyutping: "seu", kanji: "sell", katakana: "セーウ", color: consonantColors.s },
      子音なし: { jyutping: "eu", kanji: "Ｌ", katakana: "エーウ", color: consonantColors.b }
    },
    em:{
      l: { jyutping: "lem", kanji: "舐", katakana: "レーム", color: consonantColors.l },
      g: { jyutping: "gem", kanji: "game", katakana: "ゲーム", color: consonantColors.g },
      k: { jyutping: "kem", kanji: "〓", katakana: "ケーム", color: consonantColors.k },
      z: { jyutping: "zem", kanji: "jam", katakana: "ジェーム", color: consonantColors.z },
      s: { jyutping: "sem", kanji: "sem", katakana: "セーム", color: consonantColors.s },
      子音なし: { jyutping: "em", kanji: "Ｍ", katakana: "エーム", color: consonantColors.b }
    },
    en:{
      p: { jyutping: "pen", kanji: "pan", katakana: "ペーン(ヌ)", color: consonantColors.p },
      m: { jyutping: "men", kanji: "man", katakana: "メーン(ヌ)", color: consonantColors.m },
      f: { jyutping: "fen", kanji: "fd", katakana: "フェーン(ヌ)", color: consonantColors.f },
      s: { jyutping: "sen", kanji: "send", katakana: "セーン(ヌ)", color: consonantColors.s },
      j: { jyutping: "jen", kanji: "円", katakana: "イェーン(ヌ)", color: consonantColors.j },
      w: { jyutping: "wen", kanji: "van", katakana: "ウェーン(ヌ)", color: consonantColors.w },
      子音なし: { jyutping: "en", kanji: "Ｎ", katakana: "エーン(ヌ)", color: consonantColors.b }
    },
    eng:{
      b: { jyutping: "beng", kanji: "餅", katakana: "べーン(グ)", color: consonantColors.b },
      p: { jyutping: "peng", kanji: "平", katakana: "ペーン(グ)", color: consonantColors.p },
      m: { jyutping: "meng", kanji: "名", katakana: "メーン(グ)", color: consonantColors.m },
      d: { jyutping: "deng", kanji: "釘", katakana: "デーン(グ)", color: consonantColors.d },
      t: { jyutping: "teng", kanji: "聽", katakana: "テーン(グ)", color: consonantColors.t },
      l: { jyutping: "leng", kanji: "靚", katakana: "レーン(グ)", color: consonantColors.l },
      g: { jyutping: "geng", kanji: "頸", katakana: "ゲーン(グ)", color: consonantColors.g },
      k: { jyutping: "keng", kanji: "〓", katakana: "ケーン(グ)", color: consonantColors.k },
      h: { jyutping: "heng", kanji: "輕", katakana: "ヘーン(グ)", color: consonantColors.h },
      z: { jyutping: "zeng", kanji: "井", katakana: "ジェーン(グ)", color: consonantColors.z },
      c: { jyutping: "ceng", kanji: "請", katakana: "チェーン(グ)", color: consonantColors.c },
      s: { jyutping: "seng", kanji: "醒", katakana: "セーン(グ)", color: consonantColors.s },
      j: { jyutping: "jeng", kanji: "贏", katakana: "イェーン(グ)", color: consonantColors.j },
    },
    ep:{
      d: { jyutping: "dep", kanji: "嗒", katakana: "デープ", color: consonantColors.d },
      t: { jyutping: "tep", kanji: "tab", katakana: "テープ", color: consonantColors.t },
      l: { jyutping: "lep", kanji: "lab", katakana: "レープ", color: consonantColors.l },
      g: { jyutping: "gep", kanji: "夾", katakana: "ゲープ", color: consonantColors.g },
      k: { jyutping: "kep", kanji: "cap", katakana: "ケープ", color: consonantColors.k },
      h: { jyutping: "hep", kanji: "hap", katakana: "ヘープ", color: consonantColors.h },
      z: { jyutping: "zep", kanji: "㗱", katakana: "ジェープ", color: consonantColors.z },
      s: { jyutping: "sep", kanji: "(熠)", katakana: "セープ", color: consonantColors.s },
      子音なし: { jyutping: "ep", kanji: "App", katakana: "エープ", color: consonantColors.b }
    },
    et:{
      b: { jyutping: "bet", kanji: "(癟)", katakana: "べーッ(トゥ)", color: consonantColors.b },
      p: { jyutping: "pet", kanji: "噼", katakana: "ペーッ(トゥ)", color: consonantColors.p },
      f: { jyutping: "fet", kanji: "〓", katakana: "フェーッ(トゥ)", color: consonantColors.f },
      d: { jyutping: "det", kanji: "𢴈", katakana: "デーッ(トゥ)", color: consonantColors.d },
      t: { jyutping: "tet", kanji: "(撻)", katakana: "テーッ(トゥ)", color: consonantColors.t },
      l: { jyutping: "let", kanji: "let", katakana: "レーッ(トゥ)", color: consonantColors.l },
      g: { jyutping: "get", kanji: "get", katakana: "ゲーッ(トゥ)", color: consonantColors.g },
      k: { jyutping: "ket", kanji: "(屐)", katakana: "ケーッ(トゥ)", color: consonantColors.k },
      ng: { jyutping: "nget", kanji: "頇", katakana: "ケ゚ーッ(トゥ)", color: consonantColors.ng },
      h: { jyutping: "het", kanji: "head", katakana: "ヘーッ(トゥ)", color: consonantColors.h },
      z: { jyutping: "zet", kanji: "〓", katakana: "ジェーッ(トゥ)", color: consonantColors.z },
      s: { jyutping: "set", kanji: "set", katakana: "セーッ(トゥ)", color: consonantColors.s },
      w: { jyutping: "wet", kanji: "〓", katakana: "ウェーッ(トゥ)", color: consonantColors.w },
      子音なし: { jyutping: "et", kanji: "add", katakana: "エーッ(トゥ)", color: consonantColors.b }
    },
    ek:{
      b: { jyutping: "bek", kanji: "(壁)", katakana: "べーッ(ク)", color: consonantColors.b },
      p: { jyutping: "pek", kanji: "劈", katakana: "ペーッ(ク)", color: consonantColors.p },
      m: { jyutping: "mek", kanji: "MB", katakana: "メーッ(ク)", color: consonantColors.m },
      f: { jyutping: "fek", kanji: "〓", katakana: "フェーッ(ク)", color: consonantColors.f },
      d: { jyutping: "dek", kanji: "笛", katakana: "デーッ(ク)", color: consonantColors.d },
      t: { jyutping: "tek", kanji: "踢", katakana: "テーッ(ク)", color: consonantColors.t },
      l: { jyutping: "lek", kanji: "叻", katakana: "レーッ(ク)", color: consonantColors.l },
      g: { jyutping: "gek", kanji: "gag", katakana: "ゲーッ(ク)", color: consonantColors.g },
      gw: { jyutping: "gwek", kanji: "(呱)", katakana: "グェーッ(ク)", color: consonantColors.gw },
      k: { jyutping: "kek", kanji: "劇", katakana: "ケーッ(ク)", color: consonantColors.k },
      ng: { jyutping: "ngek", kanji: "〓", katakana: "ケ゚ーッ(ク)", color: consonantColors.ng },
      h: { jyutping: "hek", kanji: "吃", katakana: "ヘーッ(ク)", color: consonantColors.h },
      z: { jyutping: "zek", kanji: "隻", katakana: "ジェーッ(ク)", color: consonantColors.z },
      c: { jyutping: "cek", kanji: "赤", katakana: "チェーッ(ク)", color: consonantColors.c },
      s: { jyutping: "sek", kanji: "石", katakana: "セーッ(ク)", color: consonantColors.s },
    },
    ei:{
      b: { jyutping: "bei", kanji: "畀", katakana: "べイ", color: consonantColors.b },
      p: { jyutping: "pei", kanji: "披", katakana: "ペイ", color: consonantColors.p },
      m: { jyutping: "mei", kanji: "味", katakana: "メイ", color: consonantColors.m },
      f: { jyutping: "fei", kanji: "飛", katakana: "フェイ", color: consonantColors.f },
      d: { jyutping: "dei", kanji: "地", katakana: "デイ", color: consonantColors.d },
      n: { jyutping: "nei", kanji: "匿", katakana: "ネイ", color: consonantColors.n },
      l: { jyutping: "lei", kanji: "里", katakana: "レイ", color: consonantColors.l },
      g: { jyutping: "gei", kanji: "基", katakana: "ゲイ", color: consonantColors.g },
      k: { jyutping: "kei", kanji: "奇", katakana: "ケイ", color: consonantColors.k },
      h: { jyutping: "hei", kanji: "希", katakana: "ヘイ", color: consonantColors.h },
      s: { jyutping: "sei", kanji: "四", katakana: "セイ", color: consonantColors.s },
      w: { jyutping: "wei", kanji: "(喂)", katakana: "ウェイ", color: consonantColors.w },
      子音なし: { jyutping: "ei", kanji: "欸", katakana: "エイ", color: consonantColors.b }
    },
    ing:{
      b: { jyutping: "bing", kanji: "冰", katakana: "べン(グ)", color: consonantColors.b },
      p: { jyutping: "ping", kanji: "屏", katakana: "ペン(グ)", color: consonantColors.p },
      m: { jyutping: "ming", kanji: "明", katakana: "メン(グ)", color: consonantColors.m },
      f: { jyutping: "fing", kanji: "(揈)", katakana: "フェン(グ)", color: consonantColors.f },
      d: { jyutping: "ding", kanji: "丁", katakana: "デン(グ)", color: consonantColors.d },
      t: { jyutping: "ting", kanji: "挺", katakana: "テン(グ)", color: consonantColors.t },
      n: { jyutping: "ning", kanji: "寧", katakana: "ネン(グ)", color: consonantColors.n },
      l: { jyutping: "ling", kanji: "零", katakana: "レン(グ)", color: consonantColors.l },
      g: { jyutping: "ging", kanji: "警", katakana: "ゲン(グ)", color: consonantColors.g },
      gw: { jyutping: "gwing", kanji: "囧", katakana: "グェン(グ)", color: consonantColors.gw },
      k: { jyutping: "king", kanji: "傾", katakana: "ケン(グ)", color: consonantColors.k },
      h: { jyutping: "hing", kanji: "興", katakana: "ヘン(グ)", color: consonantColors.h },
      z: { jyutping: "zing", kanji: "整", katakana: "ジェン(グ)", color: consonantColors.z },
      c: { jyutping: "cing", kanji: "清", katakana: "チェン(グ)", color: consonantColors.c },
      s: { jyutping: "sing", kanji: "星", katakana: "セン(グ)", color: consonantColors.s },
      j: { jyutping: "jing", kanji: "形", katakana: "イェン(グ)", color: consonantColors.j },
      w: { jyutping: "wing", kanji: "永", katakana: "ウェン(グ)", color: consonantColors.w },
    },
    ik:{
      b: { jyutping: "bik", kanji: "逼", katakana: "べッ(ク)", color: consonantColors.b },
      p: { jyutping: "pik", kanji: "辟", katakana: "ペッ(ク)", color: consonantColors.p },
      m: { jyutping: "mik", kanji: "覓", katakana: "メッ(ク)", color: consonantColors.m },
      f: { jyutping: "fik", kanji: "〓", katakana: "フェッ(ク)", color: consonantColors.f },
      d: { jyutping: "dik", kanji: "的", katakana: "デッ(ク)", color: consonantColors.d },
      t: { jyutping: "tik", kanji: "剔", katakana: "テッ(ク)", color: consonantColors.t },
      n: { jyutping: "nik", kanji: "溺", katakana: "ネッ(ク)", color: consonantColors.n },
      l: { jyutping: "lik", kanji: "力", katakana: "レッ(ク)", color: consonantColors.l },
      g: { jyutping: "gik", kanji: "激", katakana: "ゲッ(ク)", color: consonantColors.g },
      gw: { jyutping: "gwik", kanji: "馘", katakana: "グェッ(ク)", color: consonantColors.gw },
      k: { jyutping: "kik", kanji: "𠽤", katakana: "ケッ(ク)", color: consonantColors.k },
      kw: { jyutping: "kwik", kanji: "隙", katakana: "クェッ(ク)", color: consonantColors.kw },
      h: { jyutping: "hik", kanji: "〓", katakana: "ヘッ(ク)", color: consonantColors.h },
      z: { jyutping: "zik", kanji: "即", katakana: "ジェッ(ク)", color: consonantColors.z },
      c: { jyutping: "cik", kanji: "戚", katakana: "チェッ(ク)", color: consonantColors.c },
      s: { jyutping: "sik", kanji: "色", katakana: "セッ(ク)", color: consonantColors.s },
      j: { jyutping: "jik", kanji: "益", katakana: "イェッ(ク)", color: consonantColors.j },
      w: { jyutping: "wik", kanji: "域", katakana: "ウェッ(ク)", color: consonantColors.w },
      子音なし: { jyutping: "ik", kanji: "(噎)", katakana: "エッ(ク)", color: consonantColors.b }
    },
    o:{
      b: { jyutping: "bo", kanji: "波", katakana: "ボー", color: consonantColors.b },
      p: { jyutping: "po", kanji: "婆", katakana: "ポー", color: consonantColors.p },
      m: { jyutping: "mo", kanji: "摩", katakana: "モー", color: consonantColors.m },
      f: { jyutping: "fo", kanji: "科", katakana: "フォー", color: consonantColors.f },
      d: { jyutping: "do", kanji: "多", katakana: "ドー", color: consonantColors.d },
      t: { jyutping: "to", kanji: "拖", katakana: "トー", color: consonantColors.t },
      n: { jyutping: "no", kanji: "挪", katakana: "ノー", color: consonantColors.n },
      l: { jyutping: "lo", kanji: "羅", katakana: "ロー", color: consonantColors.l },
      g: { jyutping: "go", kanji: "歌", katakana: "ゴー", color: consonantColors.g },
      gw: { jyutping: "gwo", kanji: "果", katakana: "グォー", color: consonantColors.gw },
      k: { jyutping: "ko", kanji: "call", katakana: "コー", color: consonantColors.k },
      kw: { jyutping: "kwo", kanji: "qua-", katakana: "クォー", color: consonantColors.kw },
      ng: { jyutping: "ngo", kanji: "我", katakana: "コ゚ー", color: consonantColors.ng },
      h: { jyutping: "ho", kanji: "何", katakana: "ホー", color: consonantColors.h },
      z: { jyutping: "zo", kanji: "左", katakana: "ジォー", color: consonantColors.z },
      c: { jyutping: "co", kanji: "錯", katakana: "チォー", color: consonantColors.c },
      s: { jyutping: "so", kanji: "梳", katakana: "ソー", color: consonantColors.s },
      j: { jyutping: "jo", kanji: "喲", katakana: "ヨー", color: consonantColors.j },
      w: { jyutping: "wo", kanji: "窩", katakana: "ウォー", color: consonantColors.w },
      子音なし: { jyutping: "o", kanji: "柯", katakana: "オー", color: consonantColors.b }
    },
    oi:{
      d: { jyutping: "doi", kanji: "代", katakana: "ドォーイ", color: consonantColors.d },
      t: { jyutping: "toi", kanji: "臺", katakana: "トォーイ", color: consonantColors.t },
      n: { jyutping: "noi", kanji: "耐", katakana: "ノォーイ", color: consonantColors.n },
      l: { jyutping: "loi", kanji: "來", katakana: "ロォーイ", color: consonantColors.l },
      g: { jyutping: "goi", kanji: "該", katakana: "ゴォーイ", color: consonantColors.g },
      k: { jyutping: "koi", kanji: "概", katakana: "コォーイ", color: consonantColors.k },
      ng: { jyutping: "ngoi", kanji: "呆", katakana: "コ゚ォーイ", color: consonantColors.ng },
      h: { jyutping: "hoi", kanji: "海", katakana: "ホォーイ", color: consonantColors.h },
      z: { jyutping: "zoi", kanji: "宰", katakana: "ジォーイ", color: consonantColors.z },
      c: { jyutping: "coi", kanji: "彩", katakana: "チォォーイ", color: consonantColors.c },
      s: { jyutping: "soi", kanji: "鰓", katakana: "ソォーイ", color: consonantColors.s },
      子音なし: { jyutping: "oi", kanji: "愛", katakana: "オォーイ", color: consonantColors.b }
    },
    om:{}, // Added empty object for 'om' based on long.txt
    on:{
      m: { jyutping: "mon", kanji: "mon", katakana: "モーン(ヌ)", color: consonantColors.m },
      g: { jyutping: "gon", kanji: "乾", katakana: "ゴーン(ヌ)", color: consonantColors.g },
      ng: { jyutping: "ngon", kanji: "岸", katakana: "コ゚ーン(ヌ)", color: consonantColors.ng },
      h: { jyutping: "hon", kanji: "看", katakana: "ホーン", color: consonantColors.h },
      w: { jyutping: "won", kanji: "won", katakana: "ウォーン(ヌ)", color: consonantColors.w },
      子音なし: { jyutping: "on", kanji: "安", katakana: "オーン(ヌ)", color: consonantColors.b }
    },
    ong:{
      b: { jyutping: "bong", kanji: "邦", katakana: "ボーン(グ)", color: consonantColors.b },
      p: { jyutping: "pong", kanji: "旁", katakana: "ポーン(グ)", color: consonantColors.p },
      m: { jyutping: "mong", kanji: "望", katakana: "モーン(グ)", color: consonantColors.m },
      f: { jyutping: "fong", kanji: "方", katakana: "フォーン(グ)", color: consonantColors.f },
      d: { jyutping: "dong", kanji: "當", katakana: "ドーン(グ)", color: consonantColors.d },
      t: { jyutping: "tong", kanji: "唐", katakana: "トーン(グ)", color: consonantColors.t },
      n: { jyutping: "nong", kanji: "囊", katakana: "ノーン(グ)", color: consonantColors.n },
      l: { jyutping: "long", kanji: "狼", katakana: "ローン(グ)", color: consonantColors.l },
      g: { jyutping: "gong", kanji: "剛", katakana: "ゴーン(グ)", color: consonantColors.g },
      gw: { jyutping: "gwong", kanji: "光", katakana: "グォーン(グ)", color: consonantColors.gw },
      k: { jyutping: "kong", kanji: "抗", katakana: "コーン(グ)", color: consonantColors.k },
      kw: { jyutping: "kwong", kanji: "狂", katakana: "クォーン(グ)", color: consonantColors.kw },
      ng: { jyutping: "ngong", kanji: "昂", katakana: "コ゚ーン(グ)", color: consonantColors.ng },
      h: { jyutping: "hong", kanji: "康", katakana: "ホーン(グ)", color: consonantColors.h },
      z: { jyutping: "zong", kanji: "裝", katakana: "ジォーン(グ)", color: consonantColors.z },
      c: { jyutping: "cong", kanji: "牀", katakana: "チォーン(グ)", color: consonantColors.c },
      s: { jyutping: "song", kanji: "爽", katakana: "ソーン(グ)", color: consonantColors.s },
      w: { jyutping: "wong", kanji: "往", katakana: "ウォーン(グ)", color: consonantColors.w },
      子音なし: { jyutping: "ong", kanji: "骯", katakana: "オーン(グ)", color: consonantColors.b }
    },
    op:{}, // Added empty object for 'op' based on long.txt
    ot:{
      b: { jyutping: "bot", kanji: "board", katakana: "ボーッ(トゥ)", color: consonantColors.b },
      p: { jyutping: "pot", kanji: "port", katakana: "ポーッ(トゥ)", color: consonantColors.p },
      g: { jyutping: "got", kanji: "割", katakana: "ゴーッ(トゥ)", color: consonantColors.g },
      k: { jyutping: "kot", kanji: "court", katakana: "コーッ(トゥ)", color: consonantColors.k },
      h: { jyutping: "hot", kanji: "渴", katakana: "ホーッ(トゥ)", color: consonantColors.h },
      w: { jyutping: "wot", kanji: "watt", katakana: "ウォーッ(トゥ)", color: consonantColors.w },
    },
    ok:{
      b: { jyutping: "bok", kanji: "縛", katakana: "ボーッ(ク)", color: consonantColors.b },
      p: { jyutping: "pok", kanji: "撲", katakana: "ポーッ(ク)", color: consonantColors.p },
      m: { jyutping: "mok", kanji: "莫", katakana: "モーッ(ク)", color: consonantColors.m },
      f: { jyutping: "fok", kanji: "霍", katakana: "フォーッ(ク)", color: consonantColors.f },
      d: { jyutping: "dok", kanji: "踱", katakana: "ドーッ(ク)", color: consonantColors.d },
      t: { jyutping: "tok", kanji: "托", katakana: "トーッ(ク)", color: consonantColors.t },
      n: { jyutping: "nok", kanji: "諾", katakana: "ノーッ(ク)", color: consonantColors.n },
      l: { jyutping: "lok", kanji: "樂", katakana: "ローッ(ク)", color: consonantColors.l },
      g: { jyutping: "gok", kanji: "各", katakana: "ゴーッ(ク)", color: consonantColors.g },
      gw: { jyutping: "gwok", kanji: "國", katakana: "グォーッ(ク)", color: consonantColors.gw },
      k: { jyutping: "kok", kanji: "確", katakana: "コーッ(ク)", color: consonantColors.k },
      kw: { jyutping: "kwok", kanji: "廓", katakana: "クォーッ(ク)", color: consonantColors.kw }, // Corrected indentation
      ng: { jyutping: "ngok", kanji: "鱷", katakana: "コ゚ーッ(ク)", color: consonantColors.ng },
      h: { jyutping: "hok", kanji: "學", katakana: "ホーッ(ク)", color: consonantColors.h },
      z: { jyutping: "zok", kanji: "作", katakana: "ジォーッ(ク)", color: consonantColors.z },
      c: { jyutping: "cok", kanji: "擢", katakana: "チォーッ(ク)", color: consonantColors.c },
      s: { jyutping: "sok", kanji: "索", katakana: "ソーッ(ク)", color: consonantColors.s },
      w: { jyutping: "wok", kanji: "獲", katakana: "ウォーッ(ク)", color: consonantColors.w },
      子音なし: { jyutping: "ok", kanji: "惡", katakana: "オーッ(ク)", color: consonantColors.b }
    },
    ou:{
      b: { jyutping: "bou", kanji: "寶", katakana: "ボウ", color: consonantColors.b },
      p: { jyutping: "pou", kanji: "抱", katakana: "ポウ", color: consonantColors.p },
      m: { jyutping: "mou", kanji: "務", katakana: "モウ", color: consonantColors.m },
      f: { jyutping: "fou", kanji: "-vel", katakana: "フォウ", color: consonantColors.f },
      d: { jyutping: "dou", kanji: "刀", katakana: "ドウ", color: consonantColors.d },
      t: { jyutping: "tou", kanji: "圖", katakana: "トウ", color: consonantColors.t },
      n: { jyutping: "nou", kanji: "奴", katakana: "ノウ", color: consonantColors.n },
      l: { jyutping: "lou", kanji: "路", katakana: "ロウ", color: consonantColors.l },
      g: { jyutping: "gou", kanji: "高", katakana: "ゴウ", color: consonantColors.g },
      k: { jyutping: "kou", kanji: "-cle", katakana: "コウ", color: consonantColors.k },
      ng: { jyutping: "ngou", kanji: "傲", katakana: "コ゚ウ", color: consonantColors.ng },
      h: { jyutping: "hou", kanji: "好", katakana: "ホウ", color: consonantColors.h },
      z: { jyutping: "zou", kanji: "早", katakana: "ジォウ", color: consonantColors.z },
      c: { jyutping: "cou", kanji: "操", katakana: "チォウ", color: consonantColors.c },
      s: { jyutping: "sou", kanji: "數", katakana: "ソウ", color: consonantColors.s },
      j: { jyutping: "jou", kanji: "yo", katakana: "ヨウ", color: consonantColors.j },
      w: { jyutping: "wou", kanji: "〓", katakana: "ウォウ", color: consonantColors.w },
      子音なし: { jyutping: "ou", kanji: "奧", katakana: "オウ", color: consonantColors.b }
    },
    ung:{
      b: { jyutping: "bung", kanji: "埲", katakana: "ボン", color: consonantColors.b },
      p: { jyutping: "pung", kanji: "碰", katakana: "ポン", color: consonantColors.p },
      m: { jyutping: "mung", kanji: "蒙", katakana: "モン", color: consonantColors.m },
      f: { jyutping: "fung", kanji: "風", katakana: "フォン", color: consonantColors.f },
      d: { jyutping: "dung", kanji: "東", katakana: "ドン", color: consonantColors.d },
      t: { jyutping: "tung", kanji: "同", katakana: "トン", color: consonantColors.t },
      n: { jyutping: "nung", kanji: "農", katakana: "ノン", color: consonantColors.n },
      l: { jyutping: "lung", kanji: "龍", katakana: "ロン", color: consonantColors.l },
      g: { jyutping: "gung", kanji: "公", katakana: "ゴン", color: consonantColors.g },
      k: { jyutping: "kung", kanji: "窮", katakana: "コン", color: consonantColors.k },
      ng: { jyutping: "ngung", kanji: "(甕)", katakana: "コ゚ン", color: consonantColors.ng },
      h: { jyutping: "hung", kanji: "紅", katakana: "ホン", color: consonantColors.h },
      z: { jyutping: "zung", kanji: "中", katakana: "ジォン", color: consonantColors.z },
      c: { jyutping: "cung", kanji: "松", katakana: "チォン", color: consonantColors.c },
      s: { jyutping: "sung", kanji: "宋", katakana: "ソン", color: consonantColors.s },
      j: { jyutping: "jung", kanji: "用", katakana: "ヨン", color: consonantColors.j },
      子音なし: { jyutping: "ung", kanji: "甕", katakana: "オン", color: consonantColors.b }
    },
    uk:{
      b: { jyutping: "buk", kanji: "瀑", katakana: "ボッ(ク)", color: consonantColors.b },
      p: { jyutping: "puk", kanji: "仆", katakana: "ポッ(ク)", color: consonantColors.p },
      m: { jyutping: "muk", kanji: "木", katakana: "モッ(ク)", color: consonantColors.m },
      f: { jyutping: "fuk", kanji: "福", katakana: "フォッ(ク)", color: consonantColors.f },
      d: { jyutping: "duk", kanji: "讀", katakana: "ドッ(ク)", color: consonantColors.d },
      t: { jyutping: "tuk", kanji: "禿", katakana: "トッ(ク)", color: consonantColors.t },
      n: { jyutping: "nuk", kanji: "忸", katakana: "ノッ(ク)", color: consonantColors.n },
      l: { jyutping: "luk", kanji: "六", katakana: "ロッ(ク)", color: consonantColors.l },
      g: { jyutping: "guk", kanji: "谷", katakana: "ゴッ(ク)", color: consonantColors.g },
      k: { jyutping: "kuk", kanji: "曲", katakana: "コッ(ク)", color: consonantColors.k },
      ng: { jyutping: "nguk", kanji: "(屋)", katakana: "コ゚ッ(ク)", color: consonantColors.ng },
      h: { jyutping: "huk", kanji: "哭", katakana: "ホッ(ク)", color: consonantColors.h },
      z: { jyutping: "zuk", kanji: "足", katakana: "ジォッ(ク)", color: consonantColors.z },
      c: { jyutping: "cuk", kanji: "束", katakana: "チォッ(ク)", color: consonantColors.c },
      s: { jyutping: "suk", kanji: "叔", katakana: "ソッ(ク)", color: consonantColors.s },
      j: { jyutping: "juk", kanji: "肉", katakana: "ヨッ(ク)", color: consonantColors.j },
      子音なし: { jyutping: "uk", kanji: "屋", katakana: "オッ(ク)", color: consonantColors.b }
    },
    oe:{
      d: { jyutping: "doe", kanji: "朵", katakana: "デェオー", color: consonantColors.d },
      t: { jyutping: "toe", kanji: "唾", katakana: "テェオー", color: consonantColors.t },
      l: { jyutping: "loe", kanji: "𦧲", katakana: "リェオー", color: consonantColors.l },
      g: { jyutping: "goe", kanji: "鋸", katakana: "ギェオー", color: consonantColors.g },
      k: { jyutping: "koe", kanji: "〓", katakana: "キェオー", color: consonantColors.k },
      h: { jyutping: "hoe", kanji: "靴", katakana: "ヘェオー", color: consonantColors.h },
      z: { jyutping: "zoe", kanji: "脧", katakana: "ジェオー", color: consonantColors.z },
      c: { jyutping: "coe", kanji: "chur", katakana: "チェオー", color: consonantColors.c },
      s: { jyutping: "soe", kanji: "瀡", katakana: "スェオー", color: consonantColors.s },
    },
    oeng:{
      d: { jyutping: "doeng", kanji: "(啄)", katakana: "デェオーン(グ)", color: consonantColors.d },
      t: { jyutping: "toeng", kanji: "-tern", katakana: "テェオーン(グ)", color: consonantColors.t },
      n: { jyutping: "noeng", kanji: "娘", katakana: "ニェオーン(グ)", color: consonantColors.n },
      l: { jyutping: "loeng", kanji: "涼", katakana: "リェオーン(グ)", color: consonantColors.l },
      g: { jyutping: "goeng", kanji: "薑", katakana: "ギェオーン(グ)", color: consonantColors.g },
      k: { jyutping: "koeng", kanji: "強", katakana: "キェオーン(グ)", color: consonantColors.k },
      h: { jyutping: "hoeng", kanji: "香", katakana: "ヘェオーン(グ)", color: consonantColors.h },
      z: { jyutping: "zoeng", kanji: "張", katakana: "ジェオーン(グ)", color: consonantColors.z },
      c: { jyutping: "coeng", kanji: "昌", katakana: "チェオーン(グ)", color: consonantColors.c },
      s: { jyutping: "soeng", kanji: "雙", katakana: "スェオーン(グ)", color: consonantColors.s },
      j: { jyutping: "joeng", kanji: "揚", katakana: "ヨーン(グ)", color: consonantColors.j },
    },
    oet:{
      f: { jyutping: "foet", kanji: "flirt", katakana: "フョーッ(トゥ)", color: consonantColors.f },
      g: { jyutping: "goet", kanji: "〓", katakana: "ギョーッ(トゥ)", color: consonantColors.g },
      h: { jyutping: "hoet", kanji: "hurt", katakana: "ヘェオーッ(トゥ)", color: consonantColors.h },
      c: { jyutping: "coet", kanji: "(亍)", katakana: "チョーッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "soet", kanji: "cert", katakana: "スョーッ(トゥ)", color: consonantColors.s },
      子音なし: { jyutping: "oet", kanji: "(嗝)", katakana: "オーッ(トゥ)", color: consonantColors.b }
    },
    oek:{
      d: { jyutping: "doek", kanji: "琢", katakana: "デェオーッ(ク)", color: consonantColors.d },
      l: { jyutping: "loek", kanji: "略", katakana: "リェオーッ(ク)", color: consonantColors.l },
      g: { jyutping: "goek", kanji: "腳", katakana: "ギェオーッ(ク)", color: consonantColors.g },
      k: { jyutping: "koek", kanji: "卻", katakana: "キェオーッ(ク)", color: consonantColors.k },
      z: { jyutping: "zoek", kanji: "着", katakana: "ジェオーッ(ク)", color: consonantColors.z },
      c: { jyutping: "coek", kanji: "卓", katakana: "チェオーッ(ク)", color: consonantColors.c },
      s: { jyutping: "soek", kanji: "削", katakana: "スェオーッ(ク)", color: consonantColors.s },
      j: { jyutping: "joek", kanji: "約", katakana: "ヨェオーッ(ク)", color: consonantColors.j },
      子音なし: { jyutping: "oek", kanji: "(嗝)", katakana: "オェオーッ(ク)", color: consonantColors.b }
    },
    eoi:{
      d: { jyutping: "deoi", kanji: "對", katakana: "ドェオイ", color: consonantColors.d },
      t: { jyutping: "teoi", kanji: "退", katakana: "トェオイ", color: consonantColors.t },
      n: { jyutping: "neoi", kanji: "女", katakana: "ノェオイ", color: consonantColors.n },
      l: { jyutping: "leoi", kanji: "累", katakana: "リェオイ", color: consonantColors.l },
      g: { jyutping: "geoi", kanji: "居", katakana: "ゴェオイ", color: consonantColors.g },
      k: { jyutping: "keoi", kanji: "區", katakana: "コェオイ", color: consonantColors.k },
      h: { jyutping: "heoi", kanji: "去", katakana: "ホェオイ", color: consonantColors.h },
      z: { jyutping: "zeoi", kanji: "最", katakana: "ジェオイ", color: consonantColors.z },
      c: { jyutping: "ceoi", kanji: "吹", katakana: "チョェオイ", color: consonantColors.c },
      s: { jyutping: "seoi", kanji: "水", katakana: "ソェオイ", color: consonantColors.s },
      j: { jyutping: "jeoi", kanji: "銳", katakana: "ヨェオイ", color: consonantColors.j },
      子音なし: { jyutping: "eoi", kanji: "", katakana: "", color: consonantColors.b } // Corrected missing data
    },
    eon:{
      d: { jyutping: "deon", kanji: "頓", katakana: "ドェオン(ヌ)", color: consonantColors.d },
      t: { jyutping: "teon", kanji: "盾", katakana: "トェオン(ヌ)", color: consonantColors.t },
      l: { jyutping: "leon", kanji: "倫", katakana: "リェオン(ヌ)", color: consonantColors.l },
      z: { jyutping: "zeon", kanji: "準", katakana: "ジェオン(ヌ)", color: consonantColors.z },
      c: { jyutping: "ceon", kanji: "春", katakana: "チォェオン(ヌ", color: consonantColors.c }, // Corrected katakana
      s: { jyutping: "seon", kanji: "信", katakana: "ソェオン(ヌ)", color: consonantColors.s },
      j: { jyutping: "jeon", kanji: "潤", katakana: "ヨェオン(ヌ)", color: consonantColors.j },
    },
    eot:{
      d: { jyutping: "deot", kanji: "(咄)", katakana: "ドェオッ(トゥ)", color: consonantColors.d },
      n: { jyutping: "neot", kanji: "肭", katakana: "ノェオッ(トゥ)", color: consonantColors.n },
      l: { jyutping: "leot", kanji: "律", katakana: "ロェオッ(トゥ)", color: consonantColors.l },
      z: { jyutping: "zeot", kanji: "卒", katakana: "ジェオッ(トゥ)", color: consonantColors.z },
      c: { jyutping: "ceot", kanji: "出", katakana: "チェオッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "seot", kanji: "術", katakana: "ソェオッ(トゥ)", color: consonantColors.s },
    },
    i:{
      b: { jyutping: "bi", kanji: "Ｂ", katakana: "ビー", color: consonantColors.b },
      p: { jyutping: "pi", kanji: "Ｐ", katakana: "ピー", color: consonantColors.p },
      m: { jyutping: "mi", kanji: "咪", katakana: "ミー", color: consonantColors.m },
      f: { jyutping: "fi", kanji: "free", katakana: "フィー", color: consonantColors.f },
      d: { jyutping: "di", kanji: "啲", katakana: "ディー", color: consonantColors.d },
      t: { jyutping: "ti", kanji: "Ｔ", katakana: "ティー", color: consonantColors.t },
      n: { jyutping: "ni", kanji: "呢", katakana: "ニー", color: consonantColors.n },
      l: { jyutping: "li", kanji: "哩", katakana: "リー", color: consonantColors.l },
      g: { jyutping: "gi", kanji: "嘰", katakana: "ギー", color: consonantColors.g },
      k: { jyutping: "ki", kanji: "key", katakana: "キー", color: consonantColors.k },
      h: { jyutping: "hi", kanji: "嘻", katakana: "ヒー", color: consonantColors.h },
      z: { jyutping: "zi", kanji: "之", katakana: "ジィー", color: consonantColors.z },
      c: { jyutping: "ci", kanji: "似", katakana: "チィー", color: consonantColors.c },
      s: { jyutping: "si", kanji: "私", katakana: "シィー", color: consonantColors.s },
      j: { jyutping: "ji", kanji: "以", katakana: "イー", color: consonantColors.j },
      w: { jyutping: "wi", kanji: "Ｖ", katakana: "ウィー", color: consonantColors.w },
    },
    iu:{
      b: { jyutping: "biu", kanji: "表", katakana: "ビーウ", color: consonantColors.b },
      p: { jyutping: "piu", kanji: "漂", katakana: "ピーウ", color: consonantColors.p },
      m: { jyutping: "miu", kanji: "秒", katakana: "ミーウ", color: consonantColors.m },
      f: { jyutping: "fiu", kanji: "覅", katakana: "フィーウ", color: consonantColors.f },
      d: { jyutping: "diu", kanji: "刁", katakana: "ディーウ", color: consonantColors.d },
      t: { jyutping: "tiu", kanji: "跳", katakana: "ティーウ", color: consonantColors.t },
      n: { jyutping: "niu", kanji: "尿", katakana: "ニーウ", color: consonantColors.n },
      l: { jyutping: "liu", kanji: "了", katakana: "リーウ", color: consonantColors.l },
      g: { jyutping: "giu", kanji: "叫", katakana: "ギーウ", color: consonantColors.g },
      k: { jyutping: "kiu", kanji: "橋", katakana: "キーウ", color: consonantColors.k },
      h: { jyutping: "hiu", kanji: "曉", katakana: "ヒーウ", color: consonantColors.h },
      z: { jyutping: "ziu", kanji: "照", katakana: "ジィーウ", color: consonantColors.z },
      c: { jyutping: "ciu", kanji: "肖", katakana: "チィーウ", color: consonantColors.c },
      s: { jyutping: "siu", kanji: "兆", katakana: "シィーウ", color: consonantColors.s },
      j: { jyutping: "jiu", kanji: "要", katakana: "イーウ", color: consonantColors.j },
    },
    im:{
      m: { jyutping: "mim", kanji: "meme", katakana: "ミーム", color: consonantColors.m },
      d: { jyutping: "dim", kanji: "點", katakana: "ディーム", color: consonantColors.d },
      t: { jyutping: "tim", kanji: "甜", katakana: "ティーム", color: consonantColors.t },
      n: { jyutping: "nim", kanji: "黏", katakana: "ニーム", color: consonantColors.n },
      l: { jyutping: "lim", kanji: "廉", katakana: "リーム", color: consonantColors.l },
      g: { jyutping: "gim", kanji: "兼", katakana: "ギーム", color: consonantColors.g },
      k: { jyutping: "kim", kanji: "鉗", katakana: "キーム", color: consonantColors.k },
      h: { jyutping: "him", kanji: "謙", katakana: "ヒーム", color: consonantColors.h },
      z: { jyutping: "zim", kanji: "尖", katakana: "ジィーム", color: consonantColors.z },
      c: { jyutping: "cim", kanji: "簽", katakana: "チィーム", color: consonantColors.c },
      s: { jyutping: "sim", kanji: "蟬", katakana: "シィーム", color: consonantColors.s },
      j: { jyutping: "jim", kanji: "鹽", katakana: "イーム", color: consonantColors.j },
    },
    in:{
      b: { jyutping: "bin", kanji: "變", katakana: "ビーン(ヌ)", color: consonantColors.b },
      p: { jyutping: "pin", kanji: "片", katakana: "ピーン(ヌ)", color: consonantColors.p },
      m: { jyutping: "min", kanji: "麪", katakana: "ミーン(ヌ)", color: consonantColors.m },
      d: { jyutping: "din", kanji: "電", katakana: "ディーン(ヌ)", color: consonantColors.d },
      t: { jyutping: "tin", kanji: "天", katakana: "ティーン(ヌ)", color: consonantColors.t },
      n: { jyutping: "nin", kanji: "年", katakana: "ニーン(ヌ)", color: consonantColors.n },
      l: { jyutping: "lin", kanji: "連", katakana: "リーン(ヌ)", color: consonantColors.l },
      g: { jyutping: "gin", kanji: "見", katakana: "ギーン(ヌ)", color: consonantColors.g },
      k: { jyutping: "kin", kanji: "虔", katakana: "キーン(ヌ)", color: consonantColors.k },
      h: { jyutping: "hin", kanji: "軒", katakana: "ヒーン", color: consonantColors.h },
      z: { jyutping: "zin", kanji: "展", katakana: "ジィーン(ヌ)", color: consonantColors.z },
      c: { jyutping: "cin", kanji: "前", katakana: "チィーン(ヌ)", color: consonantColors.c },
      s: { jyutping: "sin", kanji: "先", katakana: "シィーン(ヌ)", color: consonantColors.s },
      j: { jyutping: "jin", kanji: "然", katakana: "イーン(ヌ)", color: consonantColors.j },
      子音なし: { jyutping: "in", kanji: "in", katakana: "イーン(ヌ)", color: consonantColors.b }
    },
    ip:{
      b: { jyutping: "bip", kanji: "(嗶)", katakana: "ビーッ(プ)", color: consonantColors.b },
      d: { jyutping: "dip", kanji: "蝶", katakana: "ディーッ(プ)", color: consonantColors.d },
      t: { jyutping: "tip", kanji: "貼", katakana: "ティーッ(プ)", color: consonantColors.t },
      n: { jyutping: "nip", kanji: "聶", katakana: "ニーッ(プ)", color: consonantColors.n },
      l: { jyutping: "lip", kanji: "獵", katakana: "リーッ(プ)", color: consonantColors.l },
      g: { jyutping: "gip", kanji: "劫", katakana: "ギーッ(プ)", color: consonantColors.g },
      k: { jyutping: "kip", kanji: "keep", katakana: "キーッ(プ)", color: consonantColors.k },
      h: { jyutping: "hip", kanji: "協", katakana: "ヒーッ(プ)", color: consonantColors.h },
      z: { jyutping: "zip", kanji: "摺", katakana: "ジィーッ(プ)", color: consonantColors.z },
      c: { jyutping: "cip", kanji: "妾", katakana: "チィーッ(プ)", color: consonantColors.c },
      s: { jyutping: "sip", kanji: "涉", katakana: "シィーッ(プ)", color: consonantColors.s },
      j: { jyutping: "jip", kanji: "葉", katakana: "イーッ(プ)", color: consonantColors.j },
    },
    it:{
      b: { jyutping: "bit", kanji: "必", katakana: "ビーッ(トゥ)", color: consonantColors.b },
      p: { jyutping: "pit", kanji: "撇", katakana: "ピーッ(トゥ)", color: consonantColors.p },
      m: { jyutping: "mit", kanji: "滅", katakana: "ミーッ(トゥ)", color: consonantColors.m },
      f: { jyutping: "fit", kanji: "𢞵", katakana: "フィーッ(トゥ)", color: consonantColors.f },
      d: { jyutping: "dit", kanji: "跌", katakana: "ディーッ(トゥ)", color: consonantColors.d },
      t: { jyutping: "tit", kanji: "鐵", katakana: "ティーッ(トゥ)", color: consonantColors.t },
      l: { jyutping: "lit", kanji: "列", katakana: "リーッ(トゥ)", color: consonantColors.l },
      g: { jyutping: "git", kanji: "傑", katakana: "ギーッ(トゥ)", color: consonantColors.g },
      k: { jyutping: "kit", kanji: "揭", katakana: "キーッ(トゥ)", color: consonantColors.k },
      kw: { jyutping: "kwit", kanji: "quit", katakana: "クィーッ(トゥ)", color: consonantColors.kw },
      ng: { jyutping: "ngit", kanji: "嚙", katakana: "キ゚ーッ(トゥ)", color: consonantColors.ng },
      h: { jyutping: "hit", kanji: "歇", katakana: "ヒーッ(トゥ)", color: consonantColors.h },
      z: { jyutping: "zit", kanji: "節", katakana: "ジィーッ(トゥ)", color: consonantColors.z },
      c: { jyutping: "cit", kanji: "切", katakana: "チィーッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "sit", kanji: "泄", katakana: "シィーッ(トゥ)", color: consonantColors.s },
      j: { jyutping: "jit", kanji: "熱", katakana: "イーッ(トゥ)", color: consonantColors.j },
    },
    u:{
      b: { jyutping: "bu", kanji: "bu", katakana: "ブー", color: consonantColors.b },
      p: { jyutping: "pu", kanji: "pool", katakana: "プー", color: consonantColors.p },
      f: { jyutping: "fu", kanji: "呼", katakana: "フー", color: consonantColors.f },
      d: { jyutping: "du", kanji: "do", katakana: "ドゥー", color: consonantColors.d },
      t: { jyutping: "tu", kanji: "(吐)", katakana: "トゥー", color: consonantColors.t },
      l: { jyutping: "lu", kanji: "嚕", katakana: "ルー", color: consonantColors.l },
      g: { jyutping: "gu", kanji: "古", katakana: "グー", color: consonantColors.g },
      k: { jyutping: "ku", kanji: "箍", katakana: "クー", color: consonantColors.k },
      j: { jyutping: "ju", kanji: "Ｕ", katakana: "ユー", color: consonantColors.j },
      w: { jyutping: "wu", kanji: "烏", katakana: "ウー", color: consonantColors.w },
    },
    ui:{
      b: { jyutping: "bui", kanji: "杯", katakana: "ブーイ", color: consonantColors.b },
      p: { jyutping: "pui", kanji: "配", katakana: "プーイ", color: consonantColors.p },
      m: { jyutping: "mui", kanji: "妹", katakana: "ムーイ", color: consonantColors.m },
      f: { jyutping: "fui", kanji: "灰", katakana: "フーイ", color: consonantColors.f },
      g: { jyutping: "gui", kanji: "攰", katakana: "グーイ", color: consonantColors.g },
      k: { jyutping: "kui", kanji: "繪", katakana: "クーイ", color: consonantColors.k },
      w: { jyutping: "wui", kanji: "會", katakana: "ウーイ", color: consonantColors.w },
    },
    um:{
      s: { jyutping: "sum", kanji: "zoom", katakana: "スーム", color: consonantColors.s },
    },
    un:{
      b: { jyutping: "bun", kanji: "般", katakana: "ブーン(ヌ)", color: consonantColors.b },
      p: { jyutping: "pun", kanji: "盆", katakana: "プーン(ヌ)", color: consonantColors.p },
      m: { jyutping: "mun", kanji: "門", katakana: "ムーン(ヌ)", color: consonantColors.m },
      f: { jyutping: "fun", kanji: "歡", katakana: "フーン(ヌ)", color: consonantColors.f },
      t: { jyutping: "tun", kanji: "tune", katakana: "トゥーン(ヌ)", color: consonantColors.t },
      g: { jyutping: "gun", kanji: "官", katakana: "グーン(ヌ)", color: consonantColors.g },
      w: { jyutping: "wun", kanji: "換", katakana: "ウーン(ヌ)", color: consonantColors.w },
    },
    ut:{
      b: { jyutping: "but", kanji: "勃", katakana: "ブーッ(トゥ)", color: consonantColors.b },
      p: { jyutping: "put", kanji: "潑", katakana: "プーッ(トゥ)", color: consonantColors.p },
      m: { jyutping: "mut", kanji: "末", katakana: "ムーッ(トゥ)", color: consonantColors.m },
      f: { jyutping: "fut", kanji: "闊", katakana: "フーッ(トゥ)", color: consonantColors.f },
      d: { jyutping: "dut", kanji: "(嘟)", katakana: "ドゥーッ(トゥ)", color: consonantColors.d },
      g: { jyutping: "gut", kanji: "嗗", katakana: "グーッ(トゥ)", color: consonantColors.g },
      k: { jyutping: "kut", kanji: "括", katakana: "クーッ(トゥ)", color: consonantColors.k },
      w: { jyutping: "wut", kanji: "活", katakana: "ウーッ(トゥ)", color: consonantColors.w },
    },
    yu:{
      z: { jyutping: "zyu", kanji: "豬", katakana: "ジュー", color: consonantColors.z },
      c: { jyutping: "cyu", kanji: "柱", katakana: "チュー", color: consonantColors.c },
      s: { jyutping: "syu", kanji: "書", katakana: "シュー", color: consonantColors.s },
      j: { jyutping: "jyu", kanji: "魚", katakana: "ユー", color: consonantColors.j },
    },
    yun:{
      d: { jyutping: "dyun", kanji: "短", katakana: "デューン(ヌ)", color: consonantColors.d },
      t: { jyutping: "tyun", kanji: "屯", katakana: "テューン(ヌ)", color: consonantColors.t },
      n: { jyutping: "nyun", kanji: "暖", katakana: "ニューン(ヌ)", color: consonantColors.n },
      l: { jyutping: "lyun", kanji: "亂", katakana: "リューン(ヌ)", color: consonantColors.l },
      g: { jyutping: "gyun", kanji: "捐", katakana: "ギューン(ヌ)", color: consonantColors.g },
      k: { jyutping: "kyun", kanji: "權", katakana: "キューン(ヌ)", color: consonantColors.k },
      h: { jyutping: "hyun", kanji: "犬", katakana: "ヒューン", color: consonantColors.h },
      z: { jyutping: "zyun", kanji: "專", katakana: "ジューン(ヌ)", color: consonantColors.z },
      c: { jyutping: "cyun", kanji: "串", katakana: "チューン(ヌ)", color: consonantColors.c },
      s: { jyutping: "syun", kanji: "算", katakana: "シューン(ヌ)", color: consonantColors.s },
      j: { jyutping: "jyun", kanji: "丸", katakana: "ユーン(ヌ)", color: consonantColors.j },
    },
    yut:{
      d: { jyutping: "dyut", kanji: "奪", katakana: "デューッ(トゥ)", color: consonantColors.d },
      t: { jyutping: "tyut", kanji: "脫", katakana: "テューッ(トゥ)", color: consonantColors.t },
      l: { jyutping: "lyut", kanji: "劣", katakana: "リューッ(トゥ)", color: consonantColors.l },
      g: { jyutping: "gyut", kanji: "橛", katakana: "ギューッ(トゥ)", color: consonantColors.g },
      k: { jyutping: "kyut", kanji: "缺", katakana: "キューッ(トゥ)", color: consonantColors.k },
      h: { jyutping: "hyut", kanji: "血", katakana: "ヒューッ(トゥ)", color: consonantColors.h },
      z: { jyutping: "zyut", kanji: "啜", katakana: "シューッ(トゥ)", color: consonantColors.z }, // Corrected jyutping
      c: { jyutping: "cyut", kanji: "猝", katakana: "チューッ(トゥ)", color: consonantColors.c },
      s: { jyutping: "syut", kanji: "雪", katakana: "シューッ(トゥ)", color: consonantColors.s },
      j: { jyutping: "jyut", kanji: "月", katakana: "ユーッ(トゥ)", color: consonantColors.j },
    },
    母音なし:{
      m: { jyutping: "m", kanji: "唔", katakana: "ンー", color: consonantColors.m },
      ng: { jyutping: "ng", kanji: "五", katakana: "ン(グ)", color: consonantColors.ng },
    }
  }
}

// 発音表から特定の発音の情報を取得する関数
export function getPronunciationInfo(jyutping: string): PronunciationTableCell & { initial: string; final: string } {
  // 声調を除去
  const baseJyutping = jyutping.replace(/[1-6]$/, "")

  // 母音と子音を分離
  let initial = ""
  let final = ""

  // 子音を特定
  for (const consonant of pronunciationTable.initialConsonants) {
    if (baseJyutping.startsWith(consonant)) {
      initial = consonant
      final = baseJyutping.substring(consonant.length)
      break
    }
  }

  // 母音がない場合（例：ng）
  if (!initial) {
    final = baseJyutping
  }

  // 発音表から情報を取得
  try {
    const cells = pronunciationTable.cells as { [key: string]: { [key: string]: PronunciationTableCell } }
    if (cells[final] && cells[final][initial]) {
      return {
        ...cells[final][initial],
        initial,
        final,
        color: consonantColors[initial] || "#2f9e9a",
      }
    }
  } catch (e) {
    console.error("発音情報の取得に失敗しました:", e)
  }

  // 情報が見つからない場合
  return {
    jyutping: baseJyutping,
    kanji: "",
    katakana: "",
    initial,
    final,
    color: initial ? consonantColors[initial] : "#2f9e9a",
  }
}

// 発音表の行または列の見出しを取得する関数
export function getTableHeaders(): { initialConsonants: string[]; finals: string[] } {
  return {
    initialConsonants: pronunciationTable.initialConsonants,
    finals: pronunciationTable.finals,
  }
}
