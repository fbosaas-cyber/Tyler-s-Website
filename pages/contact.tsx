import Head from 'next/head'

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contact — Tyler Robinson</title>
      </Head>

      <main className="container" style={{ paddingTop: '3rem', paddingBottom: '4rem' }}>
        <section className="contact-hero">
          <div className="hero-content">
            <div className="hero-text">
              <h1 className="gradient-text">Let's Connect</h1>
              <p className="lead-text">
                I'm always open to discussing new opportunities, partnerships, or just having a conversation
                about technology and business. Feel free to reach out through any of the channels below.
              </p>
            </div>
            <div className="hero-image">
              <img 
                src="/full-body-patt-neff.png" 
                alt="Tyler Robinson at Pat Neff Hall, Baylor University" 
                className="profile-image"
              />
            </div>
          </div>
        </section>

        <section className="contact-methods">
          <div className="contact-grid">
            <div className="contact-card card-gradient">
              <div className="contact-icon">📞</div>
              <h3>Phone</h3>
              <p className="contact-info">(330) 803-4207</p>
              <span className="contact-label">Work</span>
            </div>
            
            <div className="contact-card card-gradient">
              <div className="contact-icon">✉️</div>
              <h3>Email</h3>
              <a href="mailto:tgrayrobinson@gmail.com" className="contact-link">
                tgrayrobinson@gmail.com
              </a>
              <span className="contact-label">Business</span>
            </div>

            <div className="contact-card card-gradient">
              <div className="contact-icon">💼</div>
              <h3>LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/tylerg-robinson/" 
                className="linkedin-button" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <span className="button-text">Connect with me</span>
                <span className="button-shine"></span>
              </a>
              <span className="contact-label">Professional Network</span>
            </div>
          </div>
        </section>

        <section className="contact-form-section">
          <h2 className="section-title">Send Me a Message</h2>
          <form className="contact-form card-gradient">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={5} required></textarea>
            </div>
            
            <button type="submit" className="submit-button">
              Send Message
            </button>
          </form>
        </section>
      </main>
    </>
  )
}
