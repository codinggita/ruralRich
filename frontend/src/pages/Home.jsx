const Home = () => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'sans-serif',
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)'
    }}>
      <h1 style={{ color: '#333', fontSize: '3rem', marginBottom: '1rem' }}>Project Boilerplate</h1>
      <p style={{ color: '#666', fontSize: '1.2rem' }}>Clean backend and frontend structure is ready.</p>
    </div>
  );
};

export default Home;
