// --- Master Data ---
const directorsInfo = {
    'kubrick': { fullNameEn: 'STANLEY KUBRICK', nameJa: 'スタンリー・キューブリック', surname: 'KUBRICK', keywords: '完璧主義 / 徹底した構図 / 哲学的狂気' },
    'lucas': { fullNameEn: 'GEORGE LUCAS', nameJa: 'ジョージ・ルーカス', surname: 'LUCAS', keywords: 'スペースオペラ / デジタル革命 / 冒険の神話' },
    'spielberg': { fullNameEn: 'STEVEN SPIELBERG', nameJa: 'スティーヴン・スピルバーグ', surname: 'SPIELBERG', keywords: '驚異の物語 / 圧倒的映画術 / ヒューマニズム' },
    'scorsese': { fullNameEn: 'MARTIN SCORSESE', nameJa: 'マーティン・スコセッシ', surname: 'SCORSESE', keywords: 'マフィアと信仰 / 移動撮影 / 魂の救済' },
    'lynch': { fullNameEn: 'DAVID LYNCH', nameJa: 'デヴィッド・リンチ', surname: 'LYNCH', keywords: '悪夢と不条理 / サウンドデザイン / 超現実主義' },
    'coen': { fullNameEn: 'JOEL & ETHAN COEN', nameJa: 'ジョエル＆イーサン・コーエン', surname: 'COENS', keywords: 'ブラックユーモア / 皮肉な運命 / 緻密な脚本' },
    'burton': { fullNameEn: 'TIM BURTON', nameJa: 'ティム・バートン', surname: 'BURTON', keywords: 'ゴシック・ファンタジー / 異形の愛 / 独創的ビジュアル' },
    'bigelow': { fullNameEn: 'KATHRYN BIGELOW', nameJa: 'キャスリン・ビグロー', surname: 'BIGELOW', keywords: '緊迫のリアリズム / 極限の暴力 / 骨太な演出' },
    'pta': { fullNameEn: 'PAUL THOMAS ANDERSON', nameJa: 'ポール・トーマス・アンダーソン', surname: 'PTA', keywords: '重厚な人間ドラマ / 狂気と愛 / 圧倒的演出力' },
    'miller': { fullNameEn: 'GEORGE MILLER', nameJa: 'ジョージ・ミラー', surname: 'MILLER', keywords: '荒野のバイオレンス / 怒涛のアクション / 視覚的物語' },
    'wright': { fullNameEn: 'EDGAR WRIGHT', nameJa: 'エドガー・ライト', surname: 'WRIGHT', keywords: '音楽との同期 / 高速カット割 / 究極のジャンル愛' },
    'coogler': { fullNameEn: 'RYAN COOGLER', nameJa: 'ライアン・クーグラー', surname: 'COOGLER', keywords: 'アイデンティティ / 魂の継承 / 圧倒的躍動感' },
    'fincher': { fullNameEn: 'DAVID FINCHER', nameJa: 'デイヴィッド・フィンチャー', surname: 'FINCHER', keywords: '完璧なデジタル美 / 徹底した情報量 / 冷徹な視点' },
    'tarantino': { fullNameEn: 'QUENTIN TARANTINO', nameJa: 'クエンティン・タランティーノ', surname: 'TARANTINO', keywords: '饒舌な会話劇 / 映画へのオマージュ / 鮮烈な暴力' },
    'anderson': { fullNameEn: 'WES ANDERSON', nameJa: 'ウェス・アンダーソン', surname: 'ANDERSON', keywords: 'シンメトリー構図 / 色彩設計 / 独自世界観' },
    'nolan': { fullNameEn: 'CHRISTOPHER NOLAN', nameJa: 'クリストファー・ノーラン', surname: 'NOLAN', keywords: '非線形な時間軸 / 実写至上主義 / 究極の没入体験' },
    'villeneuve': { fullNameEn: 'DENIS VILLENEUVE', nameJa: 'ドゥニ・ヴィルヌーヴ', surname: 'VILLENEUVE', keywords: '壮大な静謐 / 映像美の極致 / 深遠なテーマ' },
    'wachowskis': { fullNameEn: 'THE WACHOWSKIS', nameJa: 'ラナ＆リリー・ウォシャウスキー', surname: 'WACHOWSKIS', keywords: '革新的ビジュアル / サイバーパンク / 運命と解放' },
    'gerwig': { fullNameEn: 'GRETA GERWIG', nameJa: 'グレタ・ガーウィグ', surname: 'GERWIG', keywords: '現代女性の肖像 / 知的なユーモア / 瑞々しい感性' },
    'chazelle': { fullNameEn: 'DAMIEN CHAZELLE', nameJa: 'デイミアン・チャゼル', surname: 'CHAZELLE', keywords: '音楽と情熱 / 完璧なリズム / 夢と現実の交差' },
    'peele': { fullNameEn: 'JORDAN PEELE', nameJa: 'ジョーダン・ピール', surname: 'PEELE', keywords: '社会派ホラー / 緻密な伏線 / 異質な恐怖' },
    'aster': { fullNameEn: 'ARI ASTER', nameJa: 'アリ・アスター', surname: 'ASTER', keywords: '家族の崩壊 / 逃れられない呪い / 圧倒的不安感' },
    'wan': { fullNameEn: 'JAMES WAN', nameJa: 'ジェームズ・ワン', surname: 'WAN', keywords: 'ホラーの帝王 / 恐怖の視覚化 / スリラーの極致' }
};

const filmsData = [
    // Stanley Kubrick
    { year: 1953, type: 'kubrick', title: "非情の罠", context: "敵地に墜落した4人の兵士を描いたデビュー作。" },
    { year: 1955, type: 'kubrick', title: "非情の標的", context: "引退を決意したボクサーが事件に巻き込まれるノワール映画。" },
    { year: 1956, type: 'kubrick', title: "現金に体を張れ", context: "緻密な計画で競馬場襲撃に挑む男たちを描く傑作犯罪映画。" },
    { year: 1957, type: 'kubrick', title: "突撃", context: "第一次世界大戦を舞台に、軍の上層部と兵士の対立を描いた反戦映画。" },
    { year: 1960, type: 'kubrick', title: "スパルタカス", context: "古代ローマを舞台に、奴隷たちの反乱を壮大に描いた歴史大作。" },
    { year: 1962, type: 'kubrick', title: "ロリータ", context: "中年男性と少女の倒錯した愛を描いた、ナボコフの同名小説の映画化。" },
    { year: 1964, type: 'kubrick', title: "博士の異常な愛情", context: "核戦争を題材に、冷戦下の政治と狂気を皮肉ったブラックコメディ。" },
    { year: 1968, type: 'kubrick', title: "2001年宇宙の旅", context: "人類の進化と宇宙の神秘を描いた、SF映画の金字塔。" },
    { year: 1971, type: 'kubrick', title: "時計じかけのオレンジ", context: "近未来を舞台に、暴力と洗脳をめぐる人間の本質を問う衝撃作。" },
    { year: 1975, type: 'kubrick', title: "バリー・リンドン", context: "18世紀のヨーロッパを舞台に、一人の男の成り上がりと没落を描いた歴史劇。" },
    { year: 1980, type: 'kubrick', title: "シャイニング", context: "雪山のホテルを舞台にした、恐怖の心理的描写が際立つホラー映画。" },
    { year: 1987, type: 'kubrick', title: "フルメタル・ジャケット", context: "ベトナム戦争下での過酷な訓練と戦場を描いた戦争ドラマ。" },
    { year: 1999, type: 'kubrick', title: "アイズ ワイド シャット", context: "仮面舞踏会などを通じ、人間の欲望と愛の深淵を暴く遺作。" },

    // George Lucas
    { year: 1971, type: 'lucas', title: "THX 1138", context: "管理社会からの逃走を描いた、ルーカスの長編監督デビュー作。" },
    { year: 1973, type: 'lucas', title: "アメリカン・グラフィティ", context: "1960年代初頭の若者文化を描いた青春映画の傑作。" },
    { year: 1977, type: 'lucas', title: "スター・ウォーズ エピソード4/新たなる希望", context: "世界的社会現象を巻き起こした、SF映画の金字塔。" },
    { year: 1999, type: 'lucas', title: "スター・ウォーズ エピソード1/ファントム・メナス", context: "新三部作の第1章。アナキン・スカイウォーカーの少年時代を描く。" },
    { year: 2002, type: 'lucas', title: "スター・ウォーズ エピソード2/クローンの攻撃", context: "新三部作の第2章。クローン戦争の勃発とジェダイの苦闘を描く。" },
    { year: 2005, type: 'lucas', title: "スター・ウォーズ エピソード3/シスの復讐", context: "新三部作の完結編。アナキンがダース・ベイダーへと変貌する悲劇を描く。" },

    // Steven Spielberg
    { year: 1971, type: 'spielberg', title: "激突!", context: "執拗に追い掛けてくる大型トラックの恐怖を描いた傑作スリラー。" },
    { year: 1974, type: 'spielberg', title: "続・激突!/カージャック", context: "実話を基に、逃亡する夫婦とパトカーの追走劇を描いた長編映画デビュー作。" },
    { year: 1975, type: 'spielberg', title: "ジョーズ", context: "巨大な人喰いザメの恐怖。世界的な大ヒットを記録し、パニック映画の金字塔となった。" },
    { year: 1977, type: 'spielberg', title: "未知との遭遇", context: "UFOと宇宙人との接触を、壮大なスケールと美しい映像で描いたSF映画の傑作。" },
    { year: 1979, type: 'spielberg', title: "1941", context: "第二次世界大戦直後のパニックをユーモラスに描いたドタバタ喜劇。" },
    { year: 1981, type: 'spielberg', title: "レイダース/失われたアーク《聖櫃》", context: "考古学者インディ・ジョーンズの冒険。アクション・アドベンチャーの原点。" },
    { year: 1982, type: 'spielberg', title: "E.T.", context: "地球に取り残された宇宙人と少年の心の交流。世界中の涙を誘った感動の名作。" },
    { year: 1984, type: 'spielberg', title: "インディ・ジョーンズ/魔宮の伝説", context: "シリーズ第2作。インドを舞台に、さらにスリル溢れる冒険が繰り広げられる。" },
    { year: 1985, type: 'spielberg', title: "カラーパープル", context: "黒人女性の苦難に満ちた半生を描き、高い評価を得た人間ドラマ。" },
    { year: 1987, type: 'spielberg', title: "太陽の帝国", context: "第二次世界大戦下の上海。日本軍の収容所で生き抜く少年の視点から描く。" },
    { year: 1989, type: 'spielberg', title: "インディ・ジョーンズ/最後の聖戦", context: "父ヘンリーも登場。聖杯をめぐるナチスとの戦いと、父子の絆を描く。" },
    { year: 1989, type: 'spielberg', title: "オールウェイズ", context: "殉職した森林火災消火隊のパイロットが幽霊となって愛する人を守る姿を描く。" },
    { year: 1991, type: 'spielberg', title: "フック", context: "大人になったピーターパンが、子供心を取り戻して再びネバーランドへ向かう。" },
    { year: 1993, type: 'spielberg', title: "ジュラシック・パーク", context: "最新技術で現代に蘇った恐竜たちが暴走。圧倒的な臨場感のパニック超大作。" },
    { year: 1993, type: 'spielberg', title: "シンドラーのリスト", context: "ホロコーストからユダヤ人を救った男の実話。アカデミー賞作品賞などを受賞。" },
    { year: 1997, type: 'spielberg', title: "ロスト・ワールド/ジュラシック・パーク", context: "前作の数年後。再び恐竜の島へと向かった調査隊の苦闘を描く。" },
    { year: 1997, type: 'spielberg', title: "アミスタッド", context: "奴隷船で起きた反乱と、その後の裁判を通じて自由を求める人々を描く。" },
    { year: 1998, type: 'spielberg', title: "プライベート・ライアン", context: "ベトナム戦争下での過酷な任務。あまりにリアルな戦闘描写が衝撃を与えた。" },
    { year: 2001, type: 'spielberg', title: "A.I.", context: "愛を求める人間型ロボットの少年の旅。キューブリックの遺志を継いだSF叙事詩。" },
    { year: 2002, type: 'spielberg', title: "マイノリティ・レポート", context: "犯罪予防局が機能する近未来。自らが犯人と予知された男の逃走劇。" },
    { year: 2002, type: 'spielberg', title: "キャッチ・ミー・イフ・ユー・キャン", context: "若き天才詐欺師と、彼を追うFBI捜査官の機知に富んだ追いかけっこ。" },
    { year: 2004, type: 'spielberg', title: "ターミナル", context: "空港で入国拒否され足止めされた男の、奇妙で心温まる生活を描く。" },
    { year: 2005, type: 'spielberg', title: "宇宙戦争", context: "突如として始まった異星人の侵略。逃げ惑う家族の姿を描くSF大作。" },
    { year: 2005, type: 'spielberg', title: "ミュンヘン", context: "オリンピック事件の復讐を命じられた工作員たちの苦悩と葛藤を描く。" },
    { year: 2008, type: 'spielberg', title: "インディ・ジョーンズ/クリスタル・スカルの王国", context: "数十年ぶりの復活。冷戦下を舞台に、神秘の秘宝をめぐる冒険。" },
    { year: 2011, type: 'spielberg', title: "タンタンの冒険/ユニコーン号の秘密", context: "フルCGで描く。記者タンタンと相棒スノーウィの活劇ミステリー。" },
    { year: 2011, type: 'spielberg', title: "戦火の馬", context: "第一次世界大戦。数奇な運命を辿る一頭の馬と、それを取り巻く人々の物語。" },
    { year: 2012, type: 'spielberg', title: "リンカーン", context: "奴隷解放を巡る政治的闘争。第16代大統領の最期の数ヶ月を描く。" },
    { year: 2015, type: 'spielberg', title: "ブリッジ・オブ・スパイ", context: "冷戦下のスパイ交換。一人の弁護士の信念と交渉を描いた実話ドラマ。" },
    { year: 2016, type: 'spielberg', title: "BFG: ビッグ・フレンドリー・ジャイアント", context: "巨人と少女の友情を描いた、ロアルド・ダールの児童文学を映画化。" },
    { year: 2017, type: 'spielberg', title: "ペンタゴン・ペーパーズ/最高機密文書", context: "政府の隠蔽を暴く新聞社の人々。報道の自由と正義を問う緊迫のドラマ。" },
    { year: 2018, type: 'spielberg', title: "レディ・プレイヤー1", context: "仮想現実世界「オアシス」での争奪戦。数々のポップカルチャーへの愛が炸裂。" },
    { year: 2021, type: 'spielberg', title: "ウエスト・サイド・ストーリー", context: "禁断の愛と若者たちの対立。名作ミュージカルを圧倒的映像で再構築。" },
    { year: 2022, type: 'spielberg', title: "フェイブルマンズ", context: "映画監督を夢見る少年の成長と家族の秘密を描いた自伝的作品。" },

    // Martin Scorsese
    { year: 1967, type: 'scorsese', title: "ストリート・オブ・ノー・リターン", context: "若き日の葛藤を描く、長編監督デビュー作。" },
    { year: 1972, type: 'scorsese', title: "明日に処刑を…", context: "大恐慌時代、無法者の男女の逃避行。" },
    { year: 1973, type: 'scorsese', title: "ミーン・ストリート", context: "リトル・イタリーの暴力と友情、そして信仰。" },
    { year: 1974, type: 'scorsese', title: "アリスの恋", context: "自立を求めて旅する女性の姿を、リアリズムで捉える。" },
    { year: 1976, type: 'scorsese', title: "タクシードライバー", context: "大都会の孤独と狂気。トラヴィス・ビックルの肖像。" },
    { year: 1977, type: 'scorsese', title: "ニューヨーク・ニューヨーク", context: "ジャズ・エイジの光と影。野心的なミュージカル。" },
    { year: 1980, type: 'scorsese', title: "レイジング・ブル", context: "不屈のボクサー、ジェイク・ラモッタの壮絶な半生。" },
    { year: 1982, type: 'scorsese', title: "キング・オブ・コメディ", context: "妄想と野心の果て。歪んだスターへの憧憬。" },
    { year: 1985, type: 'scorsese', title: "アフター・アワーズ", context: "迷い込んだ夜の悪夢。奇妙で不条理なコメディ。" },
    { year: 1986, type: 'scorsese', title: "ハスラー2", context: "師弟の絆と誇り。伝説のハスラー、ふたたび。" },
    { year: 1988, type: 'scorsese', title: "最後の誘惑", context: "キリストの苦悩と人間性を描いた野心作。" },
    { year: 1990, type: 'scorsese', title: "グッドフェローズ", context: "マフィアの黄金時代。暴力と裏切りの狂騒曲。" },
    { year: 1991, type: 'scorsese', title: "ケープ・フィアー", context: "執拗な復讐。法廷ドラマとサスペンスの融合。" },
    { year: 1993, type: 'scorsese', title: "エイジ・オブ・イノセンス/汚れなき情事", context: "19世紀ニューヨークの上流社会。禁じられた愛。" },
    { year: 1995, type: 'scorsese', title: "カジノ", context: "ラスベガスの支配と、人間の強欲な崩壊。" },
    { year: 1997, type: 'scorsese', title: "クンドゥン", context: "ダライ・ラマ14世の若き日の軌跡とチベットの苦難。" },
    { year: 1999, type: 'scorsese', title: "救命士", context: "夜の街を駆け抜ける救急救命士の、極限の精神状態。" },
    { year: 2002, type: 'scorsese', title: "ギャング・オブ・ニューヨーク", context: "ニューヨークの血塗られた誕生の歴史。" },
    { year: 2004, type: 'scorsese', title: "アビエイター", context: "ハワード・ヒューズの野望と病的なまでの完璧主義。" },
    { year: 2005, type: 'scorsese', title: "ボブ・ディラン ノー・ディレクション・ホーム", context: "ディランの若き日の苦悩と変遷を描く傑作ドキュメンタリー。" },
    { year: 2006, type: 'scorsese', title: "ディパーテッド", context: "裏切りと欺瞞。ネズミたちのデスゲーム。" },
    { year: 2008, type: 'scorsese', title: "シャイン・ア・ライト", context: "ローリング・ストーンズのライブを極上の映像で捉える。" },
    { year: 2010, type: 'scorsese', title: "シャッター アイランド", context: "孤島の精神病院で消えた囚人。謎が謎を呼ぶスリラー。" },
    { year: 2011, type: 'scorsese', title: "ジョージ・ハリスン/リヴィング・イン・ザ・マテリアル・ワールド", context: "ジョージの魂の遍歴を辿るドキュメンタリー。" },
    { year: 2011, type: 'scorsese', title: "ヒューゴの不思議な発明", context: "映画の創成期へのオマージュを込めたファンタジー。" },
    { year: 2013, type: 'scorsese', title: "ウルフ・オブ・ウォールストリート", context: "狂乱の金、ドラッグ、飽くなき野心の喜劇。" },
    { year: 2016, type: 'scorsese', title: "沈黙 -サイレンス-", context: "隠れキリシタンの苦悩と、神の沈黙への問い。" },
    { year: 2019, type: 'scorsese', title: "アイリッシュマン", context: "ある殺し屋의 生涯と、アメリカの裏面史。" },
    { year: 2023, type: 'scorsese', title: "キラーズ・オブ・ザ・フラワームーン", context: "オセージ族の悲劇と、アメリカの深い罪。" },

    // Christopher Nolan
    { year: 1998, type: 'nolan', title: "フォロウィング", context: "路上で他人を尾行する男。嘘が嘘を呼ぶサスペンス。" },
    { year: 2000, type: 'nolan', title: "メメント", context: "10分しか記憶が保たない男。逆行する時間軸。映画史に残る衝撃作。" },
    { year: 2002, type: 'nolan', title: "インソムニア", context: "白夜の地アラスカ。眠れぬ刑事が犯す罪と葛藤。" },
    { year: 2005, type: 'nolan', title: "バットマン ビギンズ", context: "伝説のヒーローの誕生秘話。ダークでリアルな新しい騎士。" },
    { year: 2006, type: 'nolan', title: "プレステージ", context: "競い合う二人のマジシャン。執念とトリックの果てにあるもの。" },
    { year: 2008, type: 'nolan', title: "ダークナイト", context: "正義と悪の境界線。ジョーカーの狂気が街を包み込む傑作。" },
    { year: 2010, type: 'nolan', title: "インセプション", context: "他人の夢の中に潜入する。幾重にも重なる階層と視覚の迷宮。" },
    { year: 2012, type: 'nolan', title: "ダークナイト ライジング", context: "さらば、ダークナイト。壮絶なる完結編。希望と再生の物語。" },
    { year: 2014, type: 'nolan', title: "インターステラー", context: "地球の危機。人類を救うために。父と娘の愛が次元を超える。" },
    { year: 2017, type: 'nolan', title: "ダンケルク", context: "絶体絶命の撤退戦。陸、海、空。異なる時間が交錯する没入体験。" },
    { year: 2020, type: 'nolan', title: "TENET テネット", context: "時間の逆行。未来を救うために今を生きる。究極のタイムサスペンス。" },
    { year: 2023, type: 'nolan', title: "オッペンハイマー", context: "原子爆弾の父。その栄光と苦悩を、ノーラン流の映像表現で描く。" },

    // Denis Villeneuve
    { year: 1998, type: 'villeneuve', title: "UN 32 AOÛT SUR TERRE", context: "ヴィルヌーヴの長編デビュー作。ある交通事故が人生を変える。" },
    { year: 2000, type: 'villeneuve', title: "MAELSTRÖM", context: "魚が語り部となる奇妙で深遠なドラマ。事故と赦しの物語。" },
    { year: 2009, type: 'villeneuve', title: "静かなる叫び", context: "ポリテクニック大学の銃乱射事件。モノクロームの映像で静かに描く。" },
    { year: 2010, type: 'villeneuve', title: "灼熱の魂", context: "母の遺言に導かれ、中東の戦火へと向かう姉弟。衝撃の真実。" },
    { year: 2013, type: 'villeneuve', title: "プリズナーズ", context: "消えた娘。暴走する父親の怒りと正義。冷徹なサスペンス。" },
    { year: 2013, type: 'villeneuve', title: "複製された男", context: "自分と全く同じ男。ドッペルゲンガーとの遭遇が招く深淵な謎。" },
    { year: 2015, type: 'villeneuve', title: "ボーダーライン", context: "メキシコ国境。麻薬戦争の闇。善悪の境界線が消える過酷な現場。" },
    { year: 2016, type: 'villeneuve', title: "メッセージ", context: "突如として現れた宇宙船。彼らの目的は。言語が導く時間の真理。" },
    { year: 2017, type: 'villeneuve', title: "ブレードランナー 2049", context: "名作の正統続編。静寂と色彩。アイデンティティを問う映像美の極致。" },
    { year: 2021, type: 'villeneuve', title: "DUNE/デューン 砂の惑星", context: "壮大なSF叙事詩。砂の惑星の覇権をめぐる争い。圧倒的な没入感。" },
    { year: 2024, type: 'villeneuve', title: "デューン 砂の惑星 PART2", context: "ポール・アトレイデスの復讐。砂の惑星の運命を賭けた最終決戦。" },

    // Greta Gerwig
    { year: 2008, type: 'gerwig', title: "NIGHTS AND WEEKENDS", context: "ジョー・スワンバーグとの共同監督。遠距離恋愛のリアルな痛み。" },
    { year: 2017, type: 'gerwig', title: "レディ・バード", context: "サクラメントの少女の自立と母娘の絆。瑞々しい感性で描く傑作。" },
    { year: 2019, type: 'gerwig', title: "ストーリー・オブ・マイライフ/わたしの若草物語", context: "名作を現代的視点で再構築。女性たちの生き方と創作への情熱。" },
    { year: 2023, type: 'gerwig', title: "バービー", context: "ポップな世界で自分らしさを探す。現代社会への鋭い問いかけと讃歌。" },

    // Damien Chazelle
    { year: 2009, type: 'chazelle', title: "GUY AND MADELINE ON A PARK BENCH", context: "ジャズとモノクローム。チャゼルの原点となるミュージカル。" },
    { year: 2014, type: 'chazelle', title: "セッション", context: "狂気と音楽。完璧を求める師弟の、魂を削るような戦い。" },
    { year: 2016, type: 'chazelle', title: "ラ・ラ・ランド", context: "夢と恋の魔法。ロサンゼルスを舞台に描く、切なくも美しい賛歌。" },
    { year: 2018, type: 'chazelle', title: "ファースト・マン", context: "月面着陸。一人の人間、父親としてのニール・アームストロングの肖像。" },
    { year: 2022, type: 'chazelle', title: "バビロン", context: "狂騒の黄金時代ハリウッド。映画に魅せられた人々の栄光と没落。" },

    // Jordan Peele
    { year: 2017, type: 'peele', title: "ゲット・アウト", context: "恋人の実家に隠された恐怖。人種差別を背景にした新感覚ホラー。" },
    { year: 2019, type: 'peele', title: "アス", context: "自分たちと瓜二つの存在が襲来する。社会の底辺と上層の歪み。" },
    { year: 2022, type: 'peele', title: "NOPE/ノープ", context: "空に浮かぶ謎の飛行物体。見ること、撮ることへの欲望の果て。" },

    // David Lynch
    { year: 1977, type: 'lynch', title: "イレイザーヘッド", context: "悪夢的なモノクロームの映像世界。リンチの原点。" },
    { year: 1980, type: 'lynch', title: "エレファント・マン", context: "実在した異形の男の悲劇と尊厳を、重厚な映像で描く。" },
    { year: 1984, type: 'lynch', title: "デューン/砂の惑星", context: "壮大なSF叙事詩。リンチ独自の解釈が光るカルト作。" },
    { year: 1986, type: 'lynch', title: "ブルーベルベット", context: "美しき庭の芝生に落ちていた耳。郊外の闇を暴くスリラー。" },
    { year: 1990, type: 'lynch', title: "ワイルド・アット・ハート", context: "愛と逃走のバイオレンス。ヘビ皮ジャケットと愛の讃歌。" },
    { year: 1992, type: 'lynch', title: "ツイン・ピークス ローラ・パーマー最期の7日間", context: "伝説的ドラマの前日譚。少女を襲う悲劇と闇の全貌。" },
    { year: 1997, type: 'lynch', title: "ロスト・ハイウェイ", context: "記憶の変質とアイデンティティの消失。悪夢のような迷宮。" },
    { year: 1999, type: 'lynch', title: "ストレイト・ストーリー", context: "トラクターで旅する老人の、静かで美しいロードムービー。" },
    { year: 2001, type: 'lynch', title: "マルホランド・ドライブ", context: "夢と現実の境界が溶け合う、ハリウッドの闇を描いた傑作。" },
    { year: 2006, type: 'lynch', title: "インランド・エンパイア", context: "デジタル映像で描く、意識の深淵。圧倒的情報量の迷宮。" },

    // David Fincher
    { year: 1992, type: 'fincher', title: "エイリアン3", context: "人気シリーズの完結編を、独自の陰鬱な世界観で構築。" },
    { year: 1995, type: 'fincher', title: "セブン", context: "七つの大罪。雨の降る街。完璧な構成と衝撃のラスト。" },
    { year: 1997, type: 'fincher', title: "ゲーム", context: "誕生日に贈られた「ゲーム」という名の悪夢。現実と虚構の崩壊。" },
    { year: 1999, type: 'fincher', title: "ファイト・クラブ", context: "消費社会への叛逆。破壊と創造。若者たちのカルト的バイブル。" },
    { year: 2002, type: 'fincher', title: "パニック・ルーム", context: "密室での攻防。カメラワークが導く極限の緊迫感。" },
    { year: 2007, type: 'fincher', title: "ゾディアック", context: "実在の未解決事件。執念に憑かれた男たちの長い戦い。" },
    { year: 2008, type: 'fincher', title: "ベンジャミン・バトン 数奇な人生", context: "若返っていく男の生涯。時間の残酷さと愛の貴さ。" },
    { year: 2010, type: 'fincher', title: "ソーシャル・ネットワーク", context: "Facebook誕生の裏側。天才の孤独と友情の終焉を鮮やかに描く。" },
    { year: 2011, type: 'fincher', title: "ドラゴン・タトゥーの女", context: "冷徹な真実。リスベット・サランデルの衝撃的な肖像。" },
    { year: 2014, type: 'fincher', title: "ゴーン・ガール", context: "消えた妻。完璧な夫婦の裏に隠された、毒に満ちた真実。" },
    { year: 2020, type: 'fincher', title: "MANK/マンク", context: "『市民ケーン』誕生の裏側。モノクロームで描く黄金時代のハリウッド。" },
    { year: 2023, type: 'fincher', title: "ザ・キラー", context: "冷徹な暗殺者のルーティンと失敗。デジタル技術の極致。" },

    // Quentin Tarantino
    { year: 1992, type: 'tarantino', title: "レザボア・ドッグス", context: "強盗計画の失敗。倉庫に集まった男たちの疑心暗鬼。" },
    { year: 1994, type: 'tarantino', title: "パルプ・フィクション", context: "交錯する時間と群像劇。会話の妙とバイオレンスの新時代。" },
    { year: 1997, type: 'tarantino', title: "ジャッキー・ブラウン", context: "熟成された大人の犯罪ドラマ。エルモア・レナードへのオマージュ。" },
    { year: 2003, type: 'tarantino', title: "キル・ビル Vol.1", context: "復讐に燃える花嫁。日本映画やカンフーへの深い愛が炸裂。" },
    { year: 2004, type: 'tarantino', title: "キル・ビル Vol.2", context: "復讐の旅、その完結。母娘の絆と師匠への恩讐。" },
    { year: 2007, type: 'tarantino', title: "デス・プルーフ in グラインドハウス", context: "B級映画への熱いオマージュ。圧倒的カーチェイス。" },
    { year: 2009, type: 'tarantino', title: "イングロリアス・バスターズ", context: "第二次世界大戦をノーラン風…ではなくタランティーノ流に改変。映画の力。" },
    { year: 2012, type: 'tarantino', title: "ジャンゴ 繋がれざる者", context: "西部劇と奴隷解放。不屈のジャンゴの壮絶な復讐劇。" },
    { year: 2015, type: 'tarantino', title: "ヘイトフル・エイト", context: "雪山の山小屋。閉じ込められた8人の男女の、血塗られた密室劇。" },
    { year: 2019, type: 'tarantino', title: "ワンス・アポン・ア・タイム・イン・ハリウッド", context: "1969年のハリウッド。古き良き時代へのラブレターと、ある奇跡。" },

    // Joel & Ethan Coen
    { year: 1984, type: 'coen', title: "ブラッド・シンプル", context: "疑惑が招く悲劇。コーエン兄弟の鮮烈なデビュー作。" },
    { year: 1987, type: 'coen', title: "赤ちゃん泥棒", context: "赤ん坊をめぐるドタバタコメディ。瑞々しいユーモア。" },
    { year: 1990, type: 'coen', title: "ミラーズ・クロッシング", context: "禁酒法時代のギャング抗争。忠義と裏切りの重厚なドラマ。" },
    { year: 1991, type: 'coen', title: "バートン・フィンク", context: "スランプに陥った劇作家。ホテルの一室で繰り広げられる不条理な悪夢。" },
    { year: 1994, type: 'coen', title: "未来は今", context: "1950年代の大企業。ビジネスと運命を巡るスタイリッシュな喜劇。" },
    { year: 1996, type: 'coen', title: "ファーゴ", context: "雪の積もる田舎町で起きた、不器用な誘拐計画が生む惨劇。" },
    { year: 1998, type: 'coen', title: "ビッグ・リボウスキ", context: "人違いから始まった、脱力系「デュード」の奇妙な冒険。" },
    { year: 2000, type: 'coen', title: "オー・ブラザー!", context: "大恐慌時代の脱獄囚たち。音楽と神話が交錯するコメディ。" },
    { year: 2001, type: 'coen', title: "バーバー", context: "寡黙な理髪師が犯す小さな過ちが、大きな破滅を招くモノクロの悲劇。" },
    { year: 2007, type: 'coen', title: "ノーカントリー", context: "逃げ場のない不条理な暴力。シガーの足音が聞こえる傑作。" },
    { year: 2009, type: 'coen', title: "シリアスマン", context: "善良な教授を襲う不幸の連続。ユダヤ教の教えと人生の皮肉。" },
    { year: 2010, type: 'coen', title: "トゥルー・グリット", context: "少女の復讐に同行する、飲んだくれの連邦保安官。正統派西部劇。" },
    { year: 2013, type: 'coen', title: "インサイド・ルーウィン・デイヴィス 名もなき男の歌", context: "フォークソング全盛期の前夜。売れない歌手の孤独と再生。" },
    { year: 2016, type: 'coen', title: "ヘイル、シーザー!", context: "1950年代のハリウッド。映画スタジオの「解決屋」の忙しい一日。" },
    { year: 2018, type: 'coen', title: "バスターのバラード", context: "西部開拓時代を舞台にした、6つの短編からなるオムニバス。" },
    { year: 2021, type: 'coen', title: "マクベス", context: "ジョエル単独監督作。野心と運命の悲劇。圧倒的造形美。" },

    // Tim Burton
    { year: 1985, type: 'burton', title: "ピーウィーの大冒険", context: "バートンらしい独創的なビジュアルが炸裂したデビュー作。" },
    { year: 1988, type: 'burton', title: "ビートルジュース", context: "死後の世界をユーモラスかつ不気味に描いた、大ヒットホラーコメディ。" },
    { year: 1989, type: 'burton', title: "バットマン", context: "アメコミ映画の歴史を変えた。ダークでゴシックなゴッサム・シティ。" },
    { year: 1990, type: 'burton', title: "シザーハンズ", context: "ハサミの手を持つ少年の孤独と愛。バートンの原点となる感動の名作。" },
    { year: 1992, type: 'burton', title: "バットマン リターンズ", context: "さらに深まる闇と悲哀。ペンギンとキャットウーマンの登場。" },
    { year: 1994, type: 'burton', title: "エド・ウッド", context: "史上最低の映画監督への愛ある賛歌。モノクロの傑作。" },
    { year: 1996, type: 'burton', title: "マーズ・アタック!", context: "悪趣味でキュートな火星人が地球を侵略。ブラックユーモア全開。" },
    { year: 1999, type: 'burton', title: "スリーピー・ホロウ", context: "首なし騎士の伝説。霧深い村を舞台にしたゴシック・ホラー。" },
    { year: 2001, type: 'burton', title: "PLANET OF THE APES/猿の惑星", context: "名作SFをリイマジネーション。驚愕の結末が待ち受ける。" },
    { year: 2003, type: 'burton', title: "ビッグ・フィッシュ", context: "父が語る「ホラ話」。それは愛に満ちた真実だった。感動のファンタジー。" },
    { year: 2005, type: 'burton', title: "チャーリーとチョコレート工場", context: "極彩色で毒っけたっぷり。工場主ウィリー・ウォンカの不思議な世界。" },
    { year: 2005, type: 'burton', title: "コープスブライド", context: "死者の国と生者の国。ストップモーション・アニメで描く哀しき愛の物語。" },
    { year: 2007, type: 'burton', title: "スウィーニー・トッド フリート街の悪魔の理髪師", context: "復讐と血のワルツ。ダークなミュージカル・スリラー。" },
    { year: 2010, type: 'burton', title: "アリス・イン・ワンダーランド", context: "不思議の国へふたたび。大人になったアリスの成長と戦い。" },
    { year: 2012, type: 'burton', title: "ダーク・シャドウ", context: "200年の眠りから覚めた吸血鬼。風変わりな一家との共同生活。" },
    { year: 2012, type: 'burton', title: "フランケンウィニー", context: "愛犬を蘇らせた少年の物語。自らの短編をストップモーションでセルフリメイク。" },
    { year: 2014, type: 'burton', title: "ビッグ・アイズ", context: "大きな目の絵を描く妻と、功績を横取りする夫。実話に基づいたドラマ。" },
    { year: 2016, type: 'burton', title: "ミス・ペレグリンと奇妙なこどもたち", context: "特殊な能力を持つ子供たち。幻想的で少し不気味な冒険譚。" },
    { year: 2019, type: 'burton', title: "ダンボ", context: "空飛ぶ子象。バートンが描く、美しくて切ないサーカスの光景。" },
    { year: 2024, type: 'burton', title: "ビートルジュース ビートルジュース", context: "35年ぶりの続編。あの不気味な悪童が、さらなる騒動を巻き起こす。" },

    // Kathryn Bigelow
    { year: 1981, type: 'bigelow', title: "ラブレス", context: "革ジャンを纏ったバイカーたちの孤独を描く、監督デビュー作。" },
    { year: 1987, type: 'bigelow', title: "ニア・ダーク/月夜の出来事", context: "ヴァンパイアを西部劇の要素と融合させた、革新的なホラー映画。" },
    { year: 1989, type: 'bigelow', title: "ブルースチール", context: "女性警察官と殺人鬼の心理戦を描く、緊迫のサスペンス。" },
    { year: 1991, type: 'bigelow', title: "ハートブルー", context: "波間に命を懸けるサーファー強盗団とFBI。友情と対立を描く傑作。" },
    { year: 1995, type: 'bigelow', title: "ストレンジ・デイズ", context: "他人の記憶を追体験する。近未来ロサンゼルスの闇を描くSF。" },
    { year: 2002, type: 'bigelow', title: "K-19", context: "原子力潜水艦の危機。極限状態での決断と男たちの誇り。" },
    { year: 2008, type: 'bigelow', title: "ハート・ロッカー", context: "ベトナム戦争…ではなくイラク戦争の爆弾処理班。緊迫のリアリズム。" },
    { year: 2012, type: 'bigelow', title: "ゼロ・ダーク・サーティ", context: "ビンラディン殺害作戦。10年にわたる執念の追跡の果て。" },
    { year: 2017, type: 'bigelow', title: "デトロイト", context: "1967年の暴動の最中に起きた事件。衝撃のバイオレンスと社会の闇。" },

    // Paul Thomas Anderson
    { year: 1996, type: 'pta', title: "ハードエイト", context: "ベテランギャンブラーと若者の奇妙な縁。重厚なドラマ。" },
    { year: 1997, type: 'pta', title: "ブギーナイツ", context: "ポルノ映画業界の興亡と人間模様。PTAの名を知らしめた一作。" },
    { year: 1999, type: 'pta', title: "マグノリア", context: "ロサンゼルス。交錯する人生と奇跡。圧倒的熱量の群像劇。" },
    { year: 2002, type: 'pta', title: "パンチドランク・ラブ", context: "不器用な男の恋。暴力的なまでの色彩と音楽のアンサンブル。" },
    { year: 2007, type: 'pta', title: "ゼア・ウィル・ビー・ブラッド", context: "石油王の野望と孤独。ダニエル・デイ＝ルイスの凄まじい演技。" },
    { year: 2012, type: 'pta', title: "ザ・マスター", context: "新興宗教の指導者と若者の依存と対立。重厚で静謐なドラマ。" },
    { year: 2014, type: 'pta', title: "インヒアレント・ヴァイス", context: "1970年代のヒッピー文化。麻薬と陰謀の迷宮的な物語。" },
    { year: 2017, type: 'pta', title: "ファントム・スレッド", context: "仕立屋と若きミューズ。完璧を求める男と女の歪な愛。" },
    { year: 2021, type: 'pta', title: "リコリス・ピザ", context: "1970年代のサンフェルナンド・バレー。瑞々しい初恋の記憶。" },

    // George Miller
    { year: 1979, type: 'miller', title: "マッドマックス", context: "荒廃した近未来。妻子を殺された警官マックスの復讐劇。" },
    { year: 1981, type: 'miller', title: "マッドマックス2", context: "ガソリンを巡る争い。アクション映画の歴史を塗り替えた傑作。" },
    { year: 1985, type: 'miller', title: "マッドマックス/サンダードーム", context: "文明の崩壊。マックスの新たなる冒険と子供たちとの交流。" },
    { year: 1987, type: 'miller', title: "イーストウィックの魔女たち", context: "三人の魔女と一人の男。ユーモラスで不気味なファンタジー。" },
    { year: 1992, type: 'miller', title: "ロレンツォのオイル/命の詩", context: "難病の息子を救うため、医学知識のない両親が挑む不屈の実話。" },
    { year: 2006, type: 'miller', title: "ハッピー フィート", context: "歌えないペンギンがタップダンスで道を切り拓く、感動のアニメーション。" },
    { year: 2011, type: 'miller', title: "ハッピー フィート2 踊るペンギンレスキュー隊", context: "前作の続編。氷の崩壊の危機に、ペンギンたちが力を合わせる。" },
    { year: 2015, type: 'miller', title: "マッドマックス 怒りのデス・ロード", context: "怒涛のカーチェイス。圧倒的な視覚体験。伝説の復活。" },
    { year: 2022, type: 'miller', title: "アラビアンナイト 三千年の願い", context: "魔人と学者の対話。愛と孤独を巡る、時空を超えた物語。" },
    { year: 2024, type: 'miller', title: "マッドマックス:フュリオサ", context: "フュリオサの若き日の戦い。マッドマックスのサーガを補完する大作。" },

    // Edgar Wright
    { year: 1995, type: 'wright', title: "A FISTFUL OF FINGERS", context: "エドガー・ライトの長編デビュー作。低予算の西部劇パロディ。" },
    { year: 2004, type: 'wright', title: "ショーン・オブ・ザ・デッド", context: "ゾンビとコメディの融合。日常と非日常の絶妙なバランス。" },
    { year: 2007, type: 'wright', title: "ホット・ファズ -俺たちスーパーポリスメン!-", context: "エリート警官が田舎町で遭遇する怪事件。アクション映画愛に溢れた一作。" },
    { year: 2010, type: 'wright', title: "スコット・ピルグリム VS. 邪悪な元カレ軍団", context: "ビデオゲーム的演出と音楽が融合した、独創的青春活劇。" },
    { year: 2013, type: 'wright', title: "ワールズ・エンド 酔っぱらいが世界を救う!", context: "旧友たちとのパブ巡りが人類の危機に。酔っ払いSFアクション。" },
    { year: 2017, type: 'wright', title: "ベイビー・ドライバー", context: "音楽を聴くことで覚醒する天才ドライバー。究極のミュージック・アクション。" },
    { year: 2021, type: 'wright', title: "ラスト・ナイト・イン・ソーホー", context: "1960年代のロンドンへ。煌びやかな夢と悪夢が交錯するホラー。" },

    // Ryan Coogler
    { year: 2013, type: 'coogler', title: "フルートベール駅で", context: "実在の事件を映画化。ある青年の最後の一日を静かに見つめる。" },
    { year: 2015, type: 'coogler', title: "クリード チャンプを継ぐ男", context: "『ロッキー』の魂を継承し、新たな伝説を創り出した傑作。" },
    { year: 2018, type: 'coogler', title: "ブラックパンサー", context: "マーベル史上屈指の重要作。アフリカの誇りとアイデンティティを描く。" },
    { year: 2022, type: 'coogler', title: "ブラックパンサー/ワカンダ・フォーエバー", context: "王の不在。哀しみを乗り越え、ワカンダの未来のために戦う。" },

    // Lana & Lilly Wachowski
    { year: 1996, type: 'wachowskis', title: "バウンド", context: "女性同士の逃避行を描いた、スタイリッシュなネオ・ノワール。" },
    { year: 1999, type: 'wachowskis', title: "マトリックス", context: "世界は仮想現実だった。驚異の映像革命をもたらしたSFの金字塔。" },
    { year: 2003, type: 'wachowskis', title: "マトリックス リローデッド", context: "マトリックスの深層へ。さらに過激になるアクションと哲学。" },
    { year: 2003, type: 'wachowskis', title: "マトリックス レボリューションズ", context: "最終決戦。人類の未来と救世主の運命を描く完結編。" },
    { year: 2008, type: 'wachowskis', title: "スピード・レーサー", context: "極彩色のサーキット。日本アニメの実写化に挑んだ意欲作。" },
    { year: 2012, type: 'wachowskis', title: "クラウド アトラス", context: "六つの時代を駆け抜ける、魂の転生を描いた壮大な物語。" },
    { year: 2015, type: 'wachowskis', title: "ジュピター", context: "宇宙の女王となる運命の少女。壮大なスケールで描くSFファンタジー。" },
    { year: 2021, type: 'wachowskis', title: "マトリックス レザレクションズ", context: "ラナ単独監督。ふたたび世界を選択する、愛と解放の物語。" },

    // Ari Aster
    { year: 2018, type: 'aster', title: "ヘレディタリー/継承", context: "逃れられない血脈の呪い。家族の崩壊の極致。" },
    { year: 2019, type: 'aster', title: "ミッドサマー", context: "白夜の村で繰り広げられる、美しき狂信の祝祭。" },
    { year: 2023, type: 'aster', title: "ボーはおそれている", context: "怪死した母のもとへ。壮大で不条理な、ある男の帰郷の旅。" },

    // James Wan
    { year: 2004, type: 'wan', title: "ソウ", context: "低予算ながら世界を震撼させた、ソリッド・シチュエーション・スリラーの金字塔。" },
    { year: 2007, type: 'wan', title: "デッド・サイレンス", context: "腹話術人形を題材にした、古典的で不気味なゴシック・ホラー。" },
    { year: 2007, type: 'wan', title: "狼の死刑宣告", context: "平穏な日常を壊された男の復讐を描く、壮絶なバイオレンス・アクション。" },
    { year: 2010, type: 'wan', title: "インシディアス", context: "家ではなく「息子」に何かが憑いている。新たな恐怖の扉を開いた傑作。" },
    { year: 2013, type: 'wan', title: "死霊館", context: "実在の心霊研究家夫妻の事件を描く、正統派にして最恐のホラー。" },
    { year: 2013, type: 'wan', title: "インシディアス 第2章", context: "前作の謎が解け明かされる。一家を襲うさらなる恐怖と過去の秘密。" },
    { year: 2015, type: 'wan', title: "ワイルド・スピード SKY MISSION", context: "シリーズ最大級のアクション。亡きポール・ウォーカーへの愛に溢れた一作。" },
    { year: 2016, type: 'wan', title: "死霊館 エンフィールド事件", context: "史上最長の心霊現象。恐怖演出の極致を見せつけた続編。" },
    { year: 2018, type: 'wan', title: "アクアマン", context: "海底の未知なる視覚体験。DCヒーローの新たな地平を切り拓いた大作。" },
    { year: 2021, type: 'wan', title: "マリグナント 狂暴な悪夢", context: "ジャンルの枠を超えた驚愕の展開。ジェームズ・ワンの狂気が炸裂する。" },
    { year: 2023, type: 'wan', title: "アクアマン/失われた王国", context: "失われた文明と家族の絆。ド派手な海洋アクション・アドベンチャー完結編。" }
];

const episodesData = {
    'kubrick': "Stanley Kubrick Archive",
    'lucas': "George Lucas Archive",
    'spielberg': "Steven Spielberg Archive",
    'scorsese': "Martin Scorsese Archive",
    'lynch': "David Lynch Archive",
    'coen': "Joel & Ethan Coen Archive",
    'burton': "Tim Burton Archive",
    'bigelow': "Kathryn Bigelow Archive",
    'pta': "Paul Thomas Anderson Archive",
    'miller': "George Miller Archive",
    'wright': "Edgar Wright Archive",
    'coogler': "Ryan Coogler Archive",
    'fincher': "David Fincher Archive",
    'tarantino': "Quentin Tarantino Archive",
    'anderson': "Wes Anderson Archive",
    'nolan': "Christopher Nolan Archive",
    'villeneuve': "Denis Villeneuve Archive",
    'wachowskis': "The Wachowskis Archive",
    'gerwig': "Greta Gerwig Archive",
    'chazelle': "Damien Chazelle Archive",
    'peele': "Jordan Peele Archive",
    'aster': "Ari Aster Archive",
    'wan': "James Wan Archive"
};

// --- Rendering Logic ---

function renderTimeline() {
    const params = new URLSearchParams(window.location.search);
    const d1 = params.get('d1') || 'nolan';
    const d2 = params.get('d2');

    const container = document.getElementById('timeline');
    if (!container) return;
    container.innerHTML = '';
    
    // Safety check for single-mode class
    if (!d2) {
        container.classList.add('single-mode');
    } else {
        container.classList.remove('single-mode');
    }

    updateHeaderLabels(d1, d2);

    // Filter films for the selected directors
    const relevantFilms = filmsData.filter(f => f.type === d1 || f.type === d2);
    
    // Determine the year range
    const d1Debut = filmsData.find(f => f.type === d1)?.year || 1953;
    const d2Debut = d2 ? (filmsData.find(f => f.type === d2)?.year || Infinity) : Infinity;
    const debutYear = Math.min(d1Debut, d2Debut);

    // Set start year to debut year, but not earlier than our absolute floor
    const startYear = Math.max(1953, debutYear);
    const endYear = 2025;
    const currentYear = 2026;

    // Update jump nav visibility based on start year
    document.querySelectorAll('.jump-nav button').forEach(btn => {
        const jumpYear = parseInt(btn.getAttribute('onclick')?.match(/\d+/)?.[0] || "1950");
        if (jumpYear < startYear - 5) {
            btn.style.display = 'none';
        } else {
            btn.style.display = 'inline-block';
        }
    });

    for (let year = startYear; year <= endYear; year++) {
        const yearFilms = relevantFilms.filter(f => f.year === year);
        if (yearFilms.length === 0) continue;

        const row = document.createElement('div');
        row.className = `timeline-row ${year === currentYear ? 'is-current' : ''}`;
        row.id = `year-${year}`;

        const d1Films = yearFilms.filter(f => f.type === d1);
        const d2Films = yearFilms.filter(f => f.type === d2);

        row.innerHTML = `
            <div class="side nolan-side">
                ${d1Films.map(f => `
                    <div class="film-card">
                        <div class="card-content">
                            <div class="film-title">
                                <a href="https://www.google.com/search?q=${encodeURIComponent(f.title + ' 映画 ' + directorsInfo[d1].nameJa)}" target="_blank">${f.title}</a>
                            </div>
                            <div class="film-context">${f.context}</div>
                        </div>
                    </div>
                `).join('')}
            </div>
            <div class="center-axis">
                <div class="year-label">${year}</div>
                <div class="episode-label">
                    ${yearFilms.map(f => directorsInfo[f.type]?.surname || '').filter((v, i, a) => a.indexOf(v) === i).join(' & ')}
                </div>
            </div>
            <div class="side villeneuve-side">
                ${d2 ? (d2Films.length > 0 ? d2Films.map(f => `
                    <div class="film-card">
                        <div class="card-content">
                            <div class="film-title">
                                <a href="https://www.google.com/search?q=${encodeURIComponent(f.title + ' 映画 ' + directorsInfo[d2].nameJa)}" target="_blank">${f.title}</a>
                            </div>
                            <div class="film-context">${f.context}</div>
                        </div>
                    </div>
                `).join('')} : d1Films.length > 0 ? `
                    <div class="other-films-container">
                        ${filmsData.filter(f => f.year === year && f.type !== d1 && f.type !== d2).slice(0, 3).map(f => `
                            <div class="other-film-item" onclick="window.location.href='timeline.html?d1=${f.type}&d2=${d1}'">
                                <span class="other-film-director">${directorsInfo[f.type]?.surname || ''}</span>
                                <span class="other-film-title">${f.title}</span>
                            </div>
                        `).join('')}
                    </div>
                ` : '')}
            </div>
        `;
        container.appendChild(row);
    }
}

function updateHeaderLabels(d1Id, d2Id) {
    const d1Info = directorsInfo[d1Id] || directorsInfo['nolan'];
    const d2Info = d2Id ? directorsInfo[d2Id] : null;

    // Use specific classes for labels
    const labelLJa = document.querySelector('.label-l .label-ja');
    const labelLEn = document.querySelector('.label-l .label-en');
    const labelRJa = document.querySelector('.label-r .label-ja');
    const labelREn = document.querySelector('.label-r .label-en');

    if (labelLJa) labelLJa.textContent = d1Info.nameJa;
    if (labelLEn) labelLEn.textContent = d1Info.fullNameEn;

    if (d2Info) {
        if (labelRJa) labelRJa.textContent = d2Info.nameJa;
        if (labelREn) labelREn.textContent = d2Info.fullNameEn;
        const labelR = document.querySelector('.label-r');
        if (labelR) labelR.style.display = 'block';
    } else {
        const labelR = document.querySelector('.label-r');
        if (labelR) labelR.style.display = 'none';
    }
}

function jumpTo(year) {
    let el = document.getElementById(`year-${year}`);
    
    // If exact year doesn't exist, find the nearest NEXT year
    if (!el) {
        for (let y = year; y <= 2025; y++) {
            el = document.getElementById(`year-${y}`);
            if (el) break;
        }
    }

    if (el) {
        const offset = 200; // Account for sticky header and jump-nav
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = el.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
}

// Initial Render
renderTimeline();
