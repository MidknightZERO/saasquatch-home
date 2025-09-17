export default function NotFound() {
  return (
    <html>
      <head>
        <meta httpEquiv="refresh" content="3; url=/" />
        <title>Page Not Found</title>
        <style>{`
          body { font-family: system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, 'Helvetica Neue', Arial, 'Noto Sans', 'Apple Color Emoji','Segoe UI Emoji'; margin:0; display:flex; align-items:center; justify-content:center; height:100vh; background:#ffffff; color:#0f172a; }
          .card { text-align:center; border:1px solid rgba(0,0,0,0.08); padding:32px; border-radius:16px; box-shadow: 0 10px 30px rgba(0,0,0,0.06); }
          .count { font-size:48px; font-weight:700; margin-top:8px; }
          .bar { height:8px; background: rgba(0,0,0,0.08); border-radius:9999px; overflow:hidden; margin-top:16px; }
          .fill { height:100%; width:100%; background: var(--brand, #58ab8b); transform-origin:left; animation: shrink 3s linear forwards; }
          @keyframes shrink { from { transform: scaleX(1); } to { transform: scaleX(0); } }
        `}</style>
        <script dangerouslySetInnerHTML={{__html:`
          let s=3; function tick(){
            const el=document.getElementById('sec'); if(el){ el.textContent=String(s); }
            s--; if(s>=0){ setTimeout(tick,1000); }
          } tick();
        `}} />
      </head>
      <body>
        <div className="card">
          <div style={{fontSize:24, fontWeight:700}}>404 - Page not found</div>
          <div style={{marginTop:8}}>Redirecting to the homepage in</div>
          <div id="sec" className="count">3</div>
          <div className="bar"><div className="fill" /></div>
          <div style={{marginTop:12}}><a href="/" style={{color:'var(--brand, #58ab8b)', fontWeight:600}}>Go now</a></div>
        </div>
      </body>
    </html>
  )
}
