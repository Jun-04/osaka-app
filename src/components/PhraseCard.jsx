import React, { useState } from 'react';

import { Header } from './header/Header';
import '../css/phraseCard.css';

const phrases = [
  { osaka: "おおきに", osakaRomaji: "ookini", japanese: "ありがとう", japaneseRomaji: "arigatou", english: "Thank you" },
  { osaka: "なんでやねん", osakaRomaji: "nande yanen", japanese: "どうしてだよ", japaneseRomaji: "doushite da yo", english: "Why the heck!?" },
  { osaka: "ほんま？", osakaRomaji: "honma?", japanese: "本当？", japaneseRomaji: "hontou?", english: "Really?" },
  { osaka: "めっちゃうまい", osakaRomaji: "metcha umai", japanese: "とても美味しい", japaneseRomaji: "totemo oishii", english: "Super tasty" },
  { osaka: "あかん", osakaRomaji: "akan", japanese: "ダメ", japaneseRomaji: "dame", english: "No good" },
  { osaka: "かなんわ〜", osakaRomaji: "kanan wa~", japanese: "困るよ〜", japaneseRomaji: "komaru yo~", english: "That's troublesome" },
  { osaka: "いてまうで", osakaRomaji: "itemau de", japanese: "殴っちゃうぞ", japaneseRomaji: "nagucchau zo", english: "I'll punch you!" },
  { osaka: "せやな", osakaRomaji: "seyana", japanese: "そうだね", japaneseRomaji: "sou da ne", english: "That's right" },
  { osaka: "なんぼ？", osakaRomaji: "nanbo?", japanese: "いくら？", japaneseRomaji: "ikura?", english: "How much?" },
  { osaka: "ちゃうちゃう", osakaRomaji: "chau chau", japanese: "違う違う", japaneseRomaji: "chigau chigau", english: "No no, that's wrong" },
  { osaka: "はよしてや", osakaRomaji: "hayo shite ya", japanese: "早くして", japaneseRomaji: "hayaku shite", english: "Hurry up" },
  { osaka: "しんどいわ〜", osakaRomaji: "shindoi wa~", japanese: "疲れた〜", japaneseRomaji: "tsukareta~", english: "I'm exhausted" },
  { osaka: "おもろいな〜", osakaRomaji: "omoroi na~", japanese: "面白いね", japaneseRomaji: "omoshiroi ne", english: "That's funny" },
  { osaka: "いけるやん！", osakaRomaji: "ikeru yan!", japanese: "できるじゃん！", japaneseRomaji: "dekiru jan!", english: "You can do it!" },
  { osaka: "どないしたん？", osakaRomaji: "donaishitan?", japanese: "どうしたの？", japaneseRomaji: "doushita no?", english: "What happened?" },
  { osaka: "しゃあないなぁ", osakaRomaji: "sha nai naa", japanese: "仕方ないなぁ", japaneseRomaji: "shikata nai naa", english: "Can't be helped" },
  { osaka: "まいど〜", osakaRomaji: "maido~", japanese: "いらっしゃいませ", japaneseRomaji: "irasshaimase", english: "Welcome!" },
  { osaka: "いらん", osakaRomaji: "iran", japanese: "いらない", japaneseRomaji: "iranai", english: "I don't need it" },
  { osaka: "よう言わんわ", osakaRomaji: "you iwan wa", japanese: "よく言えるね", japaneseRomaji: "yoku ieru ne", english: "I can't believe you said that" },
  { osaka: "いてこますぞ", osakaRomaji: "itekomasu zo", japanese: "懲らしめてやるぞ", japaneseRomaji: "korashimete yaru zo", english: "I'll beat you up" },
];

const PhraseCard = () => {
  const [index, setIndex] = useState(0);

  const nextPhrase = () => {
    if (index < phrases.length - 1) {
      setIndex(index + 1);
    }
  };

  const prevPhrase = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  return (
    <>
    <Header/>
    <div className="container">
      <div className="card">
        <p>
          <strong>大阪弁:</strong> {phrases[index].osaka}
          {phrases[index].osakaRomaji && <span className="romaji">({phrases[index].osakaRomaji})</span>}
        </p>
        <p>
          <strong>標準語:</strong> {phrases[index].japanese}
          {phrases[index].japaneseRomaji && <span className="romaji">({phrases[index].japaneseRomaji})</span>}
        </p>
        <p><strong>English:</strong> {phrases[index].english}</p>
      </div>

      <div className="buttons">
        <button onClick={prevPhrase} disabled={index === 0}>戻る</button>
        <button onClick={nextPhrase} disabled={index === phrases.length - 1}>次へ</button>
      </div>
    </div>
    </>
  );
};

export default PhraseCard;