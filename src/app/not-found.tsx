export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      backgroundColor: '#f5f5f5',
      fontFamily: "'Merriweather', serif",
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        textAlign: 'center',
        padding: '40px',
        background: 'linear-gradient(135deg, #140f4b, #1010eb)',
        borderRadius: '12px',
        color: '#fff',
        maxWidth: '600px',
        width: '100%',
        boxShadow: '0 8px 32px rgba(0,0,0,0.3)'
      }}>
        <h1 style={{
          fontSize: '5rem',
          fontWeight: '700',
          marginBottom: '20px',
          fontFamily: "'PT Sans', sans-serif",
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          404
        </h1>
        <h2 style={{
          fontSize: '2.5rem',
          fontWeight: '700',
          marginBottom: '20px',
          fontFamily: "'PT Sans', sans-serif",
          color: '#fff',
        }}>
          Page Not Found
        </h2>
        <p style={{
          fontSize: '1.2rem',
          marginBottom: '30px',
          fontFamily: "'Merriweather', serif",
          lineHeight: '1.6',
          opacity: '0.9'
        }}>
          Sorry, the page you are looking for does not exist. It might have been moved, deleted, or you entered the wrong URL.
        </p>
        <a
          href="/"
          style={{
            display: 'inline-block',
            padding: '15px 30px',
            backgroundColor: '#fff',
            color: '#1010eb',
            textDecoration: 'none',
            borderRadius: '8px',
            fontWeight: '600',
            fontSize: '1.1rem',
            transition: 'all 0.3s ease',
            fontFamily: "'PT Sans', sans-serif",
            border: '2px solid #fff',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
          }}
          className="home-link"
        >
          Go Back Home
        </a>
      </div>
    </div>
  )
}