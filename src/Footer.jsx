import React from 'react'

function Footer() {
    return (
     <>
     <div id="foot" className="footer">
        <div className="legal-text-contain">
            <div className="small-print">
                © 2021– 
                <span className="copyright-year">2023</span>
                <span className="copyright-business-name">Muhammad Harris</span>
            </div>
            <div className="legal-links">
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Privacy Policy</a>
                </div>
                <div class="small-prints copyright"> | </div>
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Terms of Service </a>
                </div>
                <div class="small-prints copyright"> | </div>
                <div className="small-prints copyright">
                    <a href="/policies/privacy-policy" class="legal-link">Disclaimers</a>
                </div>
            </div>
        </div>
     </div>
     </>   
    )
}

export default Footer
