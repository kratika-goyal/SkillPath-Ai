import { Link } from "react-router-dom";

function HeroSection(){
    return(
        <section className="hero-section">
            <h1>Learn Smarter with <span className="gradient-text">AI-Powered</span> Roadmaps</h1>
             <p> Get a personalized learning roadmap built by AI, chat with your AI mentor 24/7, discover real project ideas, and track every step of your progress.</p>
             <div className="hero-buttons">
                <Link to="/register" className="btn btn-primary">Start Learning Free</Link>
                <Link to="/about" className="btn btn-secondary">Learn More</Link>
             </div>
        </section>
    );
}
export default HeroSection;