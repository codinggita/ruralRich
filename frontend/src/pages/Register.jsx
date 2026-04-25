import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { register, reset } from '../store/authSlice';
import { Truck, Mail, Lock, User, ArrowRight, ShieldCheck, UserCircle, Briefcase, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

const Register = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'user' });
    const { name, email, password, role } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { user, loading, error } = useSelector(state => state.auth);

    useEffect(() => {
        if (user) navigate('/');
    }, [user, navigate]);

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const selectRole = (newRole) => setFormData({ ...formData, role: newRole });
    const onSubmit = e => {
        e.preventDefault();
        dispatch(register(formData));
    };

    return (
        <div style={{ minHeight: '100vh', display: 'flex', background: '#F8FAFC' }} className="fade-in">
            {/* Split Screen Layout */}
            <div style={{ flex: '1.2', display: 'flex', flexDirection: 'column', background: '#FFFFFF', borderRight: '1px solid #F1F5F9', padding: '4rem', position: 'relative', overflow: 'hidden' }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: 'auto', position: 'relative', zIndex: 10 }}>
                    <div style={{ background: 'var(--primary)', padding: '0.6rem', borderRadius: '12px', boxShadow: '0 10px 20px var(--primary-glow)' }}>
                        <Truck color="white" size={24} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--text-main)' }}>RuralReach</span>
                </Link>

                <div style={{ maxWidth: '580px', position: 'relative', zIndex: 10, marginBottom: 'auto' }}>
                    <motion.h1 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        style={{ fontSize: '4.5rem', fontWeight: 900, color: 'var(--text-main)', lineHeight: 1.05, marginBottom: '2rem', letterSpacing: '-0.04em' }}
                    >
                        Empowering the <br/><span style={{ color: 'var(--primary)' }}>Connected World.</span>
                    </motion.h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '4rem', fontWeight: 500 }}>
                        Join the network building the world's most resilient logistics infrastructure. From global production to the hidden mile.
                    </p>

                    <div style={{ display: 'grid', gap: '1.5rem' }}>
                        {[
                            'Earn as a certified delivery agent',
                            'Modernize regional commerce',
                            'Offline-first handoff verification'
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

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                    <ShieldCheck size={18} />
                    <span>SECURE REGISTRATION PROTOCOL // v2.4</span>
                </div>
                <div style={{ position: 'absolute', bottom: '-10%', left: '-5%', width: '120%', height: '40%', background: 'radial-gradient(ellipse at center, var(--primary-light) 0%, transparent 70%)', opacity: 0.5 }}></div>
            </div>

            {/* Register Form Area */}
            <div style={{ flex: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem' }}>
                <div style={{ width: '100%', maxWidth: '440px' }}>
                    <div style={{ marginBottom: '2.5rem' }}>
                        <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '0.5rem' }}>Create Account</h2>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', fontWeight: 500 }}>Select your role to get started.</p>
                    </div>

                    {/* Enhanced Role Selector */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                        <div 
                            onClick={() => selectRole('user')}
                            style={{ 
                                padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: `2px solid ${role === 'user' ? 'var(--primary)' : 'var(--border)'}`, 
                                background: role === 'user' ? 'var(--primary-light)' : 'var(--bg-white)', cursor: 'pointer', textAlign: 'center',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: role === 'user' ? '0 10px 30px var(--primary-glow)' : 'none'
                            }}
                        >
                            <UserCircle size={28} color={role === 'user' ? 'var(--primary)' : 'var(--text-muted)'} style={{ marginBottom: '0.5rem' }} />
                            <p style={{ fontSize: '0.9rem', fontWeight: 800, color: role === 'user' ? 'var(--primary)' : 'var(--text-secondary)', margin: 0 }}>Customer</p>
                        </div>
                        <div 
                            onClick={() => selectRole('agent')}
                            style={{ 
                                padding: '1.5rem', borderRadius: 'var(--radius-lg)', border: `2px solid ${role === 'agent' ? 'var(--primary)' : 'var(--border)'}`, 
                                background: role === 'agent' ? 'var(--primary-light)' : 'var(--bg-white)', cursor: 'pointer', textAlign: 'center',
                                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)', boxShadow: role === 'agent' ? '0 10px 30px var(--primary-glow)' : 'none'
                            }}
                        >
                            <Briefcase size={28} color={role === 'agent' ? 'var(--primary)' : 'var(--text-muted)'} style={{ marginBottom: '0.5rem' }} />
                            <p style={{ fontSize: '0.9rem', fontWeight: 800, color: role === 'agent' ? 'var(--primary)' : 'var(--text-secondary)', margin: 0 }}>Agent</p>
                        </div>
                    </div>

                    <form onSubmit={onSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Full Name</label>
                            <div style={{ position: 'relative' }}>
                                <User style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                                <input name="name" value={name} onChange={onChange} className="form-control" placeholder="John Doe" style={{ paddingLeft: '3.5rem' }} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Work Email</label>
                            <div style={{ position: 'relative' }}>
                                <Mail style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                                <input name="email" value={email} onChange={onChange} className="form-control" placeholder="email@company.com" style={{ paddingLeft: '3.5rem' }} required />
                            </div>
                        </div>
                        <div className="form-group">
                            <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 800, color: 'var(--text-secondary)', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Security Key</label>
                            <div style={{ position: 'relative' }}>
                                <Lock style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} size={18} />
                                <input type="password" name="password" value={password} onChange={onChange} className="form-control" placeholder="••••••••" style={{ paddingLeft: '3.5rem' }} required />
                            </div>
                        </div>

                        {error && <div style={{ color: '#ef4444', fontSize: '0.9rem', fontWeight: 700, padding: '1rem', background: '#fef2f2', borderRadius: '12px' }}>{error}</div>}

                        <button 
                            type="submit" className="btn btn-primary" 
                            style={{ width: '100%', marginTop: '1rem', padding: '1.1rem' }} 
                            disabled={loading}
                        >
                            {loading ? 'Provisioning Account...' : `Register as ${role.toUpperCase()}`} <ArrowRight size={20} />
                        </button>
                    </form>

                    <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', fontWeight: 500 }}>
                            Joined already? <Link to="/login" style={{ color: 'var(--primary)', fontWeight: 800, textDecoration: 'none' }}>Log In</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
