import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { login, reset } from '../store/authSlice';
import { Truck, Mail, Lock, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const { email, password } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }));
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', background: '#F8FAFC' }} className="fade-in">
            {/* Split Screen Layout */}
            <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', background: '#FFFFFF', borderRight: '1px solid #F1F5F9', padding: '4rem', position: 'relative', overflow: 'hidden' }}>
                {/* Brand Logo */}
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'auto', position: 'relative', zIndex: 10 }}>
                    <div style={{ background: 'var(--primary)', padding: '0.6rem', borderRadius: '12px', boxShadow: '0 10px 20px var(--primary-glow)' }}>
                        <Truck color="white" size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)' }}>RuralReach</span>
                </Link>

                {/* Left Side Content */}
                <div style={{ maxWidth: '580px', position: 'relative', zIndex: 10, marginBottom: 'auto' }}>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.05, marginBottom: '2rem', letterSpacing: '-0.04em' }}
                    >
                        Connecting the <br/><span style={{ color: 'var(--primary)' }}>Hidden Mile.</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '4rem', fontWeight: 500 }}>
                        The world's first decentralized logistics protocol designed specifically for rural and regional infrastructure.
                    </p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            'Satellite-verified delivery tracking',
                            'Automated route optimization',
                            'Secure peer-to-peer verification'
                        ].map((text, i) => (
                            <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <div style={{ background: 'var(--primary-light)', padding: '0.4rem', borderRadius: '50%', display: 'flex' }}>
                                    <CheckCircle2 color="var(--primary)" size={18} />
                                </div>
                                <span style={{ fontWeight: 600, color: 'var(--text-secondary)' }}>{text}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Status Footer */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    <ShieldCheck size={18} />
                    <span>SYSTEMS OPERATIONAL // ENCRYPTED ACCESS</span>
                </div>

                {/* Abstract Background Design */}
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '120%', height: '40%', background: 'radial-gradient(ellipse at center, var(--primary-light) 0%, transparent 70%)', opacity: 0.5 }}></div>
            </div>

            {/* Login Form Area */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
                <div style={{ width: '100%', maxWidth: '420px' }}>
                    <div style={{ marginBottom: '3.5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.75rem' }}>Log In</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>Enter your credentials to access the portal.</p>
                    </div>

                    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.75rem' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Corporate Email</label>
                            <div style={{ position: 'relative' }}>
                                <Mail style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                                <input 
                                    name="email" value={email} onChange={onChange} 
                                    className="form-control" placeholder="name@company.com" 
                                    style={{ paddingLeft: '3.5rem' }} required 
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                                <label style={{ fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Key</label>
                                <a href="#" style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none' }}>Forgot?</a>
                            </div>
                            <div style={{ position: 'relative' }}>
                                <Lock style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={20} />
                                <input 
                                    type="password" name="password" value={password} onChange={onChange} 
                                    className="form-control" placeholder="••••••••" 
                                    style={{ paddingLeft: '3.5rem' }} required 
                                />
                            </div>
                        </div>

                        {error && <div style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 700, padding: '1rem', background: '#fef2f2', borderRadius: '12px', border: '1px solid #fee2e2' }}>{error}</div>}

                        <button 
                            type="submit" className="btn btn-primary" 
                            style={{ width: '100%', marginTop: '1rem', padding: '1.1rem' }} 
                            disabled={loading}
                        >
                            {loading ? 'Authorizing Access...' : 'Sign In to Network'} <ArrowRight size={20} />
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                            New to RuralReach? <Link to="/register" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none' }}>Create Account</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
