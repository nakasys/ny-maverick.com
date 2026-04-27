'use client'

import { useEffect, useRef, useState } from 'react'

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    reveals.forEach(el => io.observe(el))

    const onScroll = () => {
      const nav = document.getElementById('navbar')
      if (nav) nav.style.background = window.scrollY > 60 ? 'rgba(10,22,40,0.98)' : 'rgba(10,22,40,0.92)'
    }
    window.addEventListener('scroll', onScroll)
    return () => { io.disconnect(); window.removeEventListener('scroll', onScroll) }
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      formRef.current?.reset()
    }, 3000)
  }

  return (
    <>
      {/* ─── NAV ─── */}
      <nav id="navbar">
        <a href="#hero" className="nav-logo">
          MAVERICK PROPERTIES
          <span>NEW YORK REAL ESTATE ADVISOR</span>
        </a>
        <ul className={`nav-links${menuOpen ? ' is-open' : ''}`}>
          <li><a href="#about"    onClick={() => setMenuOpen(false)}>会社案内</a></li>
          <li><a href="#services" onClick={() => setMenuOpen(false)}>サービス</a></li>
          <li><a href="#approach" onClick={() => setMenuOpen(false)}>投資戦略</a></li>
          <li><a href="#property" onClick={() => setMenuOpen(false)}>投資案件</a></li>
          <li><a href="#team"     onClick={() => setMenuOpen(false)}>体制</a></li>
          <li><a href="#contact"  onClick={() => setMenuOpen(false)}>連絡先</a></li>
        </ul>
        <a href="#contact" className="nav-cta">お問い合わせ</a>
        <div className="hamburger" onClick={() => setMenuOpen(o => !o)}>
          <span /><span /><span />
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section id="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-content">
          <p className="hero-eyebrow">New York Real Estate</p>
          <h1 className="hero-title">
            ローリスク＆<em>リアルリターン</em>を<br />
            実現する<br />
            ニューヨーク不動産投資
          </h1>
          <p className="hero-sub">
            東京12年・ニューヨーク22年の実績。<br />
            本質的な価値に投資し、長期安定収益を実現する<br />
            マーベリックプロパティーの共同投資ビジネス。
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">22<small style={{ fontSize: '1rem' }}>年</small></div>
              <div className="label">ニューヨーク実績</div>
            </div>
            <div className="hero-stat">
              <div className="num">12<small style={{ fontSize: '1rem' }}>年</small></div>
              <div className="label">東京実績</div>
            </div>
            <div className="hero-stat">
              <div className="num">5<small style={{ fontSize: '1rem' }}>年+</small></div>
              <div className="label">長期投資スパン</div>
            </div>
          </div>
          <div className="hero-btns">
            <a href="#property" className="btn-primary">最新投資案件を見る</a>
            <a href="#about"    className="btn-outline">会社案内</a>
          </div>
        </div>
        <div className="hero-scroll">SCROLL</div>
      </section>

      {/* ─── ABOUT ─── */}
      <section id="about">
        <div className="container">
          <div className="about-grid">
            <div className="about-img-wrap reveal">
              <img
                src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80"
                alt="マーベリックプロパティー オフィス"
                className="about-img"
              />
              <div className="about-badge">
                <div className="big">34</div>
                <small>YEARS COMBINED<br />EXPERIENCE</small>
              </div>
            </div>
            <div className="about-text">
              <p className="section-eyebrow reveal">About Us</p>
              <h2 className="section-title reveal">マーベリック<br />プロパティーとは</h2>
              <div className="section-divider reveal" />
              <p className="reveal">
                マーベリックプロパティーは、ニューヨーク不動産への共同投資を専門とするアドバイザリー企業です。東京での12年間、そしてニューヨークでの22年にわたる現地実績を基盤に、日本の投資家の皆様へ真に価値ある投資機会をご提供してきました。
              </p>
              <p className="reveal">
                「ローリスク＆リアルリターン」を経営理念に掲げ、単なる仲介ではなく、自らも投資に参加するパートナーとして案件に関わることで、利害の一致した誠実なアドバイスを実現しています。
              </p>
              <div className="about-pillars reveal">
                <div className="pillar">
                  <div className="pillar-icon">🏛</div>
                  <h4>不動産投資顧問</h4>
                  <p>投資戦略の立案からデューデリジェンスまで一貫サポート</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">🤝</div>
                  <h4>アセット・パートナー</h4>
                  <p>自己資金を投じることで投資家と同じ目線を共有</p>
                </div>
                <div className="pillar">
                  <div className="pillar-icon">📊</div>
                  <h4>スウェット・パートナー</h4>
                  <p>物件運用を受託し、稼働率・収益率を最大化</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICES ─── */}
      <section id="services">
        <div className="container">
          <div className="services-intro">
            <p className="section-eyebrow reveal">Services</p>
            <h2 className="section-title reveal">提供サービス</h2>
            <div className="section-divider reveal" />
            <p className="reveal">
              ニューヨーク不動産への投資を検討されている方から、すでに物件をお持ちで運用改善を求めている方まで、フェーズに応じた専門サービスをご提供しています。
            </p>
          </div>
          <div className="services-grid">
            <div className="service-card reveal">
              <div className="service-num">01</div>
              <h3>投資案件の発掘・組成</h3>
              <p>ニューヨーク現地での豊富なネットワークを活用し、市場に出る前の優良物件情報をいち早く入手。弁護士・エンジニア・会計士による専門チームが案件を精査・組成します。</p>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">02</div>
              <h3>デューデリジェンス支援</h3>
              <p>物件の法的・物理的・財務的リスクを多角的に検証。過去の収支実績から将来の収益予測まで、投資判断に必要な情報を日本語でご提供します。</p>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">03</div>
              <h3>共同投資の組成</h3>
              <p>複数の投資家と共同出資による案件参加スキームを構築。少額からNY不動産市場へのアクセスを可能にし、リスクを分散しながら実質的なリターンを追求します。</p>
            </div>
            <div className="service-card reveal">
              <div className="service-num">04</div>
              <h3>物件管理・運用受託</h3>
              <p>取得後の賃貸管理・テナント対応・修繕手配までを一括受託。現地スタッフによるきめ細やかな管理で、安定した稼働率と収益を維持します。</p>
            </div>
            <div className="service-card reveal reveal-delay-1">
              <div className="service-num">05</div>
              <h3>マーケット情報の提供</h3>
              <p>ニューヨーク不動産市場の最新動向・経済指標・エリア分析をタイムリーにお届け。長期的な視点での投資判断をサポートします。</p>
            </div>
            <div className="service-card reveal reveal-delay-2">
              <div className="service-num">06</div>
              <h3>エグジット戦略の立案</h3>
              <p>5年以上を視野に入れた長期運用から最適なタイミングでの売却まで、投資ライフサイクル全体を通じた戦略的アドバイスを提供します。</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── APPROACH ─── */}
      <section id="approach">
        <div className="container">
          <div className="approach-layout">
            <div>
              <p className="section-eyebrow reveal">Investment Approach</p>
              <h2 className="section-title reveal">投資戦略・<br />フィロソフィー</h2>
              <div className="section-divider reveal" />
              <div className="approach-steps">
                <div className="step reveal">
                  <div className="step-num">01</div>
                  <div className="step-body">
                    <h4>長期視点による本質価値の見極め</h4>
                    <p>5年以上の長期スパンで稼働率・収益率の推移を洞察。短期的な市場変動に惑わされず、物件が持つ本質的な価値に基づいた投資判断を行います。</p>
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-num">02</div>
                  <div className="step-body">
                    <h4>専門家チームによるリスク管理</h4>
                    <p>弁護士・エンジニア・会計士・不動産エージェントなど各分野の専門家が連携し、法的・技術的・財務的リスクを多層的に管理します。</p>
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-num">03</div>
                  <div className="step-body">
                    <h4>利益相反のないパートナーシップ</h4>
                    <p>当社自身もアセット・パートナーとして自己資金を投資。投資家と完全に利害が一致した立場でアドバイスを提供します。</p>
                  </div>
                </div>
                <div className="step reveal">
                  <div className="step-num">04</div>
                  <div className="step-body">
                    <h4>安定キャッシュフローの重視</h4>
                    <p>売却益への依存を避け、物件からの安定した賃料収益を重視。インフレヘッジとしての実物資産の特性を最大限に活かします。</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="approach-right reveal">
              <div className="quote-block">
                <blockquote>
                  「短期的な値上がりを追うのではなく、物件が生み出す真の収益力を見極める。それが私たちの不動産投資における一貫した哲学です。」
                </blockquote>
                <div className="quote-cite">
                  <strong>マーベリックプロパティー</strong>
                  投資フィロソフィーより
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80"
                alt="ニューヨーク摩天楼"
                className="approach-img"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROPERTY ─── */}
      <section id="property">
        <div className="container">
          <p className="section-eyebrow reveal">Featured Investment</p>
          <h2 className="section-title reveal">最新投資案件</h2>
          <div className="section-divider reveal" />
          <div className="property-card reveal">
            <img
              src="/imgs/nicholas_big.jpg"
              alt="327 St. Nicholas Avenue"
              className="property-img"
            />
            <div className="property-info">
              <span className="property-tag">NEW LISTING</span>
              <h3 className="property-name">327 St. Nicholas Avenue</h3>
              <p className="property-addr">Between 126th &amp; 127th Street, Manhattan, New York, NY 10027</p>
              <p className="property-desc">
                ハーレム地区に位置するマンハッタンの収益物件。近年の再開発により急速に注目が高まるエリアで、安定した賃料収入と長期的な資産価値向上が期待できる案件です。詳細資料（PDF）をご用意しています。
              </p>
              <a href="#contact" className="property-cta">資料請求・お問い合わせ</a>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TESTIMONIAL ─── */}
      <section id="testimonial">
        <div className="container">
          <div className="testimonial-inner">
            <p className="section-eyebrow reveal" style={{ justifyContent: 'center' }}>Recommendation</p>
            <div className="testimonial-quote reveal">
              マーベリックプロパティーの投資アプローチは、科学的な分析思考と豊富な現地経験に裏打ちされています。長期的視点と誠実なパートナーシップ精神は、信頼に値する投資顧問の証左です。
            </div>
            <div className="testimonial-author reveal">
              <span className="name">辻 守哉</span>
              <span className="title">ロックフェラー大学 教授 / 免疫学研究者<br />メルク・キリンビール コンサルタント</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── TEAM ─── */}
      <section id="team">
        <div className="container">
          <div className="team-desc">
            <p className="section-eyebrow reveal">Our Team</p>
            <h2 className="section-title reveal">専門家チーム体制</h2>
            <div className="section-divider reveal" />
            <p className="reveal">
              各案件は、不動産・法律・財務・技術の各分野における専門家が連携することで、多角的なリスク管理を実現しています。
            </p>
          </div>
          <div className="team-grid">
            <div className="team-item reveal">
              <div className="team-icon">⚖️</div>
              <h4>弁護士</h4>
              <p>契約書審査、権利関係の確認、法的リスクの検証</p>
            </div>
            <div className="team-item reveal reveal-delay-1">
              <div className="team-icon">🏗</div>
              <h4>エンジニア</h4>
              <p>建物の物理的状態調査、修繕費用の見積もり</p>
            </div>
            <div className="team-item reveal reveal-delay-2">
              <div className="team-icon">📋</div>
              <h4>会計士</h4>
              <p>財務デューデリジェンス、税務最適化の提案</p>
            </div>
            <div className="team-item reveal reveal-delay-3">
              <div className="team-icon">🏙</div>
              <h4>不動産エージェント</h4>
              <p>現地市場の調査、物件評価、交渉サポート</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section id="contact">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info">
              <p className="section-eyebrow reveal">Contact</p>
              <h2 className="section-title reveal">お問い合わせ</h2>
              <div className="section-divider reveal" />
              <p className="reveal">
                ニューヨーク不動産投資への参加をご検討の方、資料請求のご要望、その他ご質問はお気軽にご連絡ください。専任スタッフが丁寧にご対応いたします。
              </p>
              <div className="contact-detail reveal">
                <div className="contact-row">
                  <span className="contact-label">会社名</span>
                  <span className="contact-val">Maverick Properties, Inc.</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">所在地</span>
                  <span className="contact-val">New York, NY USA</span>
                </div>
                <div className="contact-row">
                  <span className="contact-label">WEB</span>
                  <span className="contact-val">
                    <a href="https://ny-maverick.com">ny-maverick.com</a>
                  </span>
                </div>
              </div>
            </div>
            <div className="contact-form reveal">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-row">
                    <label>お名前 *</label>
                    <input type="text" placeholder="山田 太郎" required />
                  </div>
                  <div className="form-row">
                    <label>メールアドレス *</label>
                    <input type="email" placeholder="taro@example.com" required />
                  </div>
                </div>
                <div className="form-row">
                  <label>お問い合わせ種別</label>
                  <select>
                    <option value="">選択してください</option>
                    <option>投資案件への参加について</option>
                    <option>資料請求</option>
                    <option>会社案内・サービス説明</option>
                    <option>その他</option>
                  </select>
                </div>
                <div className="form-row">
                  <label>メッセージ *</label>
                  <textarea placeholder="ご質問・ご要望をお書きください" required></textarea>
                </div>
                <button
                  type="submit"
                  className="form-submit"
                  style={submitted ? { background: '#4a7c59', color: '#fff' } : undefined}
                >
                  {submitted ? '送信しました ✓' : '送信する →'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <div className="footer-logo">MAVERICK PROPERTIES</div>
              <p className="footer-tagline">
                ローリスク＆リアルリターンを実現する<br />ニューヨーク発の不動産共同投資ビジネス。<br />東京12年・NY22年の実績。
              </p>
            </div>
            <div className="footer-col">
              <h5>Company</h5>
              <ul>
                <li><a href="#about">会社案内</a></li>
                <li><a href="#team">専門家チーム</a></li>
                <li><a href="#testimonial">推薦者</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Services</h5>
              <ul>
                <li><a href="#services">サービス一覧</a></li>
                <li><a href="#approach">投資戦略</a></li>
                <li><a href="#property">投資案件</a></li>
              </ul>
            </div>
            <div className="footer-col">
              <h5>Info</h5>
              <ul>
                <li><a href="#contact">連絡先</a></li>
                <li><a href="#">Q&amp;A</a></li>
                <li><a href="#">マーケット情報</a></li>
                <li><a href="#">実績集</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copy">© 2009–2026 Maverick Properties, Inc. All rights reserved.</p>
            <p className="footer-copy">New York, NY USA</p>
          </div>
        </div>
      </footer>
    </>
  )
}
