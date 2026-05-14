const directors = [
    { category: '1950s - 1960s', items: [
        { id: 'kubrick', surname: 'KUBRICK', nameJa: 'スタンリー・キューブリック', nameEn: 'STANLEY KUBRICK' }
    ]},
    { category: '1970s - 1980s', items: [
        { id: 'lucas', surname: 'LUCAS', nameJa: 'ジョージ・ルーカス', nameEn: 'GEORGE LUCAS' },
        { id: 'spielberg', surname: 'SPIELBERG', nameJa: 'スティーヴン・スピルバーグ', nameEn: 'STEVEN SPIELBERG' },
        { id: 'scorsese', surname: 'SCORSESE', nameJa: 'マーティン・スコセッシ', nameEn: 'MARTIN SCORSESE', keywords: 'マフィアと信仰 / 移動撮影 / 魂の救済' },
        { id: 'lynch', surname: 'LYNCH', nameJa: 'デヴィッド・リンチ', nameEn: 'DAVID LYNCH' },
        { id: 'miller', surname: 'MILLER', nameJa: 'ジョージ・ミラー', nameEn: 'GEORGE MILLER' },
        { id: 'bigelow', surname: 'BIGELOW', nameJa: 'キャスリン・ビグロー', nameEn: 'KATHRYN BIGELOW' }
    ]},
    { category: '1990s - 2000s', items: [
        { id: 'coen', surname: 'COENS', nameJa: 'ジョエル＆イーサン・コーエン', nameEn: 'JOEL & ETHAN COEN' },
        { id: 'burton', surname: 'BURTON', nameJa: 'ティム・バートン', nameEn: 'TIM BURTON' },
        { id: 'fincher', surname: 'FINCHER', nameJa: 'デイヴィッド・フィンチャー', nameEn: 'DAVID FINCHER' },
        { id: 'tarantino', surname: 'TARANTINO', nameJa: 'クエンティン・タランティーノ', nameEn: 'QUENTIN TARANTINO' },
        { id: 'wright', surname: 'WRIGHT', nameJa: 'エドガー・ライト', nameEn: 'EDGAR WRIGHT' },
        { id: 'pta', surname: 'PTA', nameJa: 'ポール・トーマス・アンダーソン', nameEn: 'PAUL THOMAS ANDERSON' },
        { id: 'anderson', surname: 'ANDERSON', nameJa: 'ウェス・アンダーソン', nameEn: 'WES ANDERSON', keywords: 'シンメトリー構図 / 色彩設計 / 独自世界観' },
        { id: 'nolan', surname: 'NOLAN', nameJa: 'クリストファー・ノーラン', nameEn: 'CHRISTOPHER NOLAN', keywords: '非線形な時間軸 / 実写至上主義 / 究極の没入体験' },
        { id: 'villeneuve', surname: 'VILLENEUVE', nameJa: 'ドゥニ・ヴィルヌーヴ', nameEn: 'DENIS VILLENEUVE' },
        { id: 'wachowskis', surname: 'WACHOWSKIS', nameJa: 'ラナ＆リリー・ウォシャウスキー', nameEn: 'THE WACHOWSKIS' }
    ]},
    { category: '2010s - 2020s', items: [
        { id: 'gerwig', surname: 'GERWIG', nameJa: 'グレタ・ガーウィグ', nameEn: 'GRETA GERWIG' },
        { id: 'chazelle', surname: 'CHAZELLE', nameJa: 'デイミアン・チャゼル', nameEn: 'DAMIEN CHAZELLE' },
        { id: 'peele', surname: 'PEELE', nameJa: 'ジョーダン・ピール', nameEn: 'JORDAN PEELE' },
        { id: 'coogler', surname: 'COOGLER', nameJa: 'ライアン・クーグラー', nameEn: 'RYAN COOGLER' },
        { id: 'aster', surname: 'ASTER', nameJa: 'アリ・アスター', nameEn: 'ARI ASTER' }
    ]}
];

let selectedDirectors = [];

function renderList() {
    const container = document.getElementById('director-grid');
    container.className = 'director-list';
    container.innerHTML = '';

    let globalIndex = 1;

    directors.forEach(group => {
        // Render Category Header
        const header = document.createElement('div');
        header.className = 'director-category-title';
        header.textContent = group.category;
        container.appendChild(header);

        // Render Directors in Group
        group.items.forEach(dir => {
            const item = document.createElement('div');
            const displayIndex = globalIndex.toString().padStart(2, '0');
            item.className = `director-item ${selectedDirectors.includes(dir.id) ? 'selected' : ''}`;
            item.innerHTML = `
                <div class="item-index">${displayIndex}</div>
                <div class="item-name-ja">
                    ${dir.nameJa}
                    ${dir.keywords ? `<div class="item-keywords">${dir.keywords}</div>` : ''}
                </div>
                <div class="item-name-en">${dir.nameEn}</div>
            `;
            item.onclick = () => toggleSelection(dir.id);
            container.appendChild(item);
            globalIndex++;
        });
    });
}

function toggleSelection(id) {
    const index = selectedDirectors.indexOf(id);
    if (index > -1) {
        selectedDirectors.splice(index, 1);
    } else {
        if (selectedDirectors.length < 2) {
            selectedDirectors.push(id);
        } else {
            // 3人目は選ばせず、2人まで
            selectedDirectors.shift();
            selectedDirectors.push(id);
        }
    }
    
    updateUI();
}

function updateUI() {
    renderList();
    const btn = document.getElementById('compare-btn');
    const allItems = directors.flatMap(g => g.items);

    if (selectedDirectors.length === 1) {
        const d1 = allItems.find(d => d.id === selectedDirectors[0]);
        btn.textContent = `${d1.nameJa} の作品年表を見る`;
        btn.classList.add('visible');
    } else if (selectedDirectors.length === 2) {
        const names = selectedDirectors.map(id => allItems.find(d => d.id === id).nameJa);
        btn.textContent = `${names[0]} と ${names[1]} を比較する`;
        btn.classList.add('visible');
    } else {
        btn.classList.remove('visible');
    }
}

document.getElementById('compare-btn').onclick = () => {
    if (selectedDirectors.length >= 1) {
        const d1 = selectedDirectors[0];
        const d2 = selectedDirectors[1] || '';
        window.location.href = `timeline.html?d1=${d1}${d2 ? `&d2=${d2}` : ''}`;
    }
};

// Initial Render
renderList();
