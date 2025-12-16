import './Footer.css';

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    {/* Brand */}
                    <div className="footer-brand">
                        <span className="footer-logo gradient-text">이너리드</span>
                        <p className="footer-tagline">
                            AI는 도구일 뿐, 선택은 당신의 몫입니다.<br />
                            실행력으로 증명하는 AI 교육, 이너리드.
                        </p>
                    </div>

                    {/* SNS Links */}
                    <div className="footer-sns">
                        <h4 className="footer-section-title">SNS</h4>
                        <div className="sns-links">
                            <a href="https://blog.naver.com/aibro/223302275291" target="_blank" rel="noopener noreferrer" className="sns-link">
                                네이버 블로그
                            </a>
                            <a href="https://www.youtube.com/@innerlead?sub_confirmation=1" target="_blank" rel="noopener noreferrer" className="sns-link">
                                YouTube
                            </a>
                            <a href="http://pf.kakao.com/_mHxldG/friend" target="_blank" rel="noopener noreferrer" className="sns-link">
                                카카오톡 채널
                            </a>
                            <a href="https://cafe.naver.com/aibro" target="_blank" rel="noopener noreferrer" className="sns-link">
                                네이버 카페
                            </a>
                            <a href="https://www.threads.net/inner_lead" target="_blank" rel="noopener noreferrer" className="sns-link">
                                Threads
                            </a>
                        </div>
                    </div>

                    {/* Consultation */}
                    <div className="footer-consult">
                        <h4 className="footer-section-title">상담 & 미팅</h4>
                        <div className="consult-links">
                            <a href="https://open.kakao.com/o/simoMRPf" target="_blank" rel="noopener noreferrer" className="consult-link">
                                1:1 미팅 신청
                            </a>
                            <a href="https://innerlead.notion.site/19381eb0765d8020aaa5f8ffa273d28d" target="_blank" rel="noopener noreferrer" className="consult-link">
                                기업/기관 강의 의뢰
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © 2025 이너리드. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}

