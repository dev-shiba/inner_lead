import { useState } from 'react';
import './ContactPage.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        type: 'individual',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // 실제로는 여기서 API 호출
        alert('문의가 접수되었습니다. 빠른 시일 내에 연락드리겠습니다.');
    };

    const contactMethods = [
        {
            icon: '💬',
            title: '카카오톡 채널',
            description: '실시간 상담',
            link: 'https://pf.kakao.com/_xxxxx',
            linkText: '채널 추가하기',
        },
        {
            icon: '📧',
            title: '이메일',
            description: '상세 문의',
            link: 'mailto:innerlead@example.com',
            linkText: 'innerlead@example.com',
        },
        {
            icon: '📝',
            title: '블로그',
            description: 'AI 활용 팁 & 후기',
            link: 'https://blog.naver.com/innerlead',
            linkText: '블로그 방문',
        },
    ];

    return (
        <main className="contact-page">
            <section className="contact-hero">
                <div className="container">
                    <span className="contact-badge">💬 문의하기</span>
                    <h1 className="contact-title">
                        무엇이든 <span className="gradient-text">물어보세요</span>
                    </h1>
                    <p className="contact-subtitle">
                        강의, 컨설팅, 협업 등 모든 문의를 환영합니다
                    </p>
                </div>
            </section>

            <section className="contact-content">
                <div className="container">
                    <div className="contact-layout">
                        {/* Contact Methods */}
                        <div className="contact-methods">
                            <h2 className="methods-title">연락 방법</h2>
                            <div className="methods-list">
                                {contactMethods.map((method, index) => (
                                    <a
                                        key={index}
                                        href={method.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="method-card"
                                    >
                                        <span className="method-icon">{method.icon}</span>
                                        <div className="method-info">
                                            <h3 className="method-title">{method.title}</h3>
                                            <p className="method-desc">{method.description}</p>
                                            <span className="method-link">{method.linkText} →</span>
                                        </div>
                                    </a>
                                ))}
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="contact-form-wrapper">
                            <h2 className="form-title">문의 양식</h2>
                            <form className="contact-form" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="name">이름 / 회사명</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="홍길동 / (주)회사명"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label htmlFor="email">이메일</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="example@email.com"
                                        required
                                    />
                                </div>

                                <div className="form-group">
                                    <label>문의 유형</label>
                                    <div className="radio-group">
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="individual"
                                                checked={formData.type === 'individual'}
                                                onChange={handleChange}
                                            />
                                            <span>개인 상담</span>
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="corporate"
                                                checked={formData.type === 'corporate'}
                                                onChange={handleChange}
                                            />
                                            <span>기업/기관 교육</span>
                                        </label>
                                        <label className="radio-label">
                                            <input
                                                type="radio"
                                                name="type"
                                                value="other"
                                                checked={formData.type === 'other'}
                                                onChange={handleChange}
                                            />
                                            <span>기타</span>
                                        </label>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="message">문의 내용</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="궁금한 점이나 요청 사항을 자유롭게 작성해주세요"
                                        rows={5}
                                        required
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary submit-btn">
                                    문의 보내기
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
