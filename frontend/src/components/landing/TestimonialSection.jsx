function TestimonialSection(){
    const testimonials = [
        { name: 'Priya Sharma', role: 'Web Developer', text: 'SkillPath AI gave me a clear roadmap when I was completely lost. The AI chat answered every doubt I had at 2 AM!', avatar: 'PS' },
        { name: 'Arjun Mehta', role: 'CS Student', text: 'I generated my roadmap and built 3 projects following it. Got my first internship within 4 months!', avatar: 'AM' },
        { name: 'Fatima Khan', role: 'Career Switcher', text: 'Switched from marketing to data science using this platform. The personalized plan made all the difference.', avatar: 'FK' },
        ];
    return(
    <section className="testimonials-section">
      <h2 >What our <span className="gradient-text"> Students Say</span></h2>
      <div className="testimonials-grid">
        {testimonials.map((t,index)=>(
            <div key={index} className="testimonial-card">
                <p className="quote">{t.quote}</p>
                <h4 className="author">{t.name}</h4>
                <p className="role">{t.role}</p>
            </div>    
        ))}
    </div>
  </section>  
    );
}
export default TestimonialSection;