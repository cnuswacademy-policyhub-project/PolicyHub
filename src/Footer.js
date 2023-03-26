export default function Footer({$target}) {
    const $footer = document.createElement('div')
    $target.appendChild($footer)

    $footer.style.textAlign = 'center'
    $footer.innerHTML = `
        <h2>🇰🇷 CNU SW Academy 정책 hub Team 🇰🇷</h2>
        <h4>함진규 | 박영규 | 나혜수 | 편민준</h4>
    `
}