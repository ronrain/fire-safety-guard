import './About.css'

const About = () => {
  return (
    <main>
      <div className="container">
        <h1 className="display-4 text-center">Who We Are</h1>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <p className="lead">
              We are a fire safety company serving the tri-state area. Our expertise extends to <strong>both commercial and residential properties</strong>, including prestigious locations such as UBS Arena and Disney Headquarters in Manhattan. We pride ourselves on having all <strong>FDNY Certified Fire Guards</strong>!
            </p>

            <div className="mt-4">
              <h3 className="mt-4">Is Your Home Safe?</h3>
              <img src="./smoke-de.webp" alt="Using WIFI enabled smoke detectors are the future of safety!" className="img-fluid" style={{ float:'left', maxWidth: '60%', height: 'auto', margin:'1rem' }} />
              <div>
                <p>
                  Your home should be a sanctuary, free from the threat of fire hazards. At OSHA 2020 Consultants, we take home safety seriously. Our expert technicians are equipped to conduct thorough inspections of your home, leaving no stone unturned.
                </p>
                <p>
                  During our inspection, we meticulously assess key safety components, including smoke alarms, exits, egress routes, and potential combustible hazards. We prioritize identifying and mitigating any risks to ensure your home is a safe environment for you and your loved ones.
                </p>
                <p>
                  In addition to our comprehensive inspections, we offer state-of-the-art Wi-Fi smoke detectors. These innovative devices provide added convenience without compromising reliability. With real-time notifications and remote monitoring capabilities, you can have peace of mind knowing your home is protected, even when you're away.
                </p>
                <p>
                  Don't wait until it's too late. Take proactive steps to safeguard your home and family today. Contact us to schedule an inspection and learn more about our range of fire safety solutions.
                </p>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="mt-4">Ensuring Safety in Shelters</h3>
              <img src="./shelter.jpeg" alt="NYC Shelters Need Trained Fire Guards" className="img-fluid" style={{ float:'right', maxWidth: '50%', height: 'auto', margin: '1rem' }} />
              <div>
                <p>
                  At OSHA 2020 Consultants, we are dedicated to ensuring the safety and well-being of individuals residing in shelters across the tri-state area. Our commitment to fire safety extends to every corner of our community, including those seeking refuge in homeless or emergency shelters.
                </p>
                <p>
                  Just like in any other residential or commercial property, fire safety is paramount in shelters. The safety of vulnerable individuals who seek shelter in these facilities is of utmost importance. That's why we provide specialized services tailored to meet the unique needs of shelters, ensuring compliance with all fire safety regulations.
                </p>
                <p>
                  Our team of experts, comprised of FDNY Certified Fire Guards, understands the critical role shelters play in providing a safe haven for those in need. We work closely with shelter administrators and staff to implement comprehensive fire safety measures, including regular inspections, staff training, and emergency preparedness protocols.
                </p>
                <p>
                  Fire incidents can have devastating consequences, particularly in shelter environments where individuals may face additional challenges in evacuating safely. Our technicians conduct thorough inspections to identify and address potential hazards, ensuring that smoke alarms, exits, and egress routes are properly maintained and accessible at all times.
                </p>
                <p>
                  Don't leave the safety of your shelter residents to chance. Partner with OSHA 2020 Consultants and ensure that your facility meets the highest standards of fire safety. Contact us today to schedule a consultation and take proactive steps towards safeguarding those who rely on your shelter for safety and security.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default About;
