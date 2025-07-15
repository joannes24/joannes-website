import React from 'react';
import { Mail, Phone, MapPin, GraduationCap, Stethoscope, BookOpen, Award, Heart } from 'lucide-react';

const Index = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">Joanne Sebastian</h1>
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Activities', 'Education', 'Skills', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Future <span className="text-blue-600">Physician</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Passionate medical student dedicated to compassionate patient care, 
                cutting-edge research, and advancing healthcare through innovation and empathy.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button 
                  onClick={() => scrollToSection('experience')}
                  className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  View My Experience
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
                >
                  Get In Touch
                </button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center shadow-2xl">
                <div className="w-72 h-72 rounded-full bg-white flex items-center justify-center">
                  <Stethoscope size={120} className="text-blue-600" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-gray-800">Joanne Sebastian</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I am a passionate pre-medical student with hands-on experience in patient care, medical assistance, and research. My journey in medicine is driven by a commitment to compassionate care, continuous learning, and making a positive impact in healthcare. I have worked in diverse clinical settings, contributed to research in neuropsychology and affective neuroscience, and actively participated in community and extracurricular activities.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My goal is to integrate scientific knowledge with empathy and leadership to serve patients and communities. I am fluent in English and Malayalam, and I thrive in collaborative, multidisciplinary environments.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Heart className="mx-auto mb-4 text-blue-600" size={40} />
                <h4 className="font-semibold text-gray-800 mb-2">Compassionate Care</h4>
                <p className="text-sm text-gray-600">Patient-centered approach</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <BookOpen className="mx-auto mb-4 text-blue-600" size={40} />
                <h4 className="font-semibold text-gray-800 mb-2">Research & Learning</h4>
                <p className="text-sm text-gray-600">Continuous education & inquiry</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Award className="mx-auto mb-4 text-blue-600" size={40} />
                <h4 className="font-semibold text-gray-800 mb-2">Leadership</h4>
                <p className="text-sm text-gray-600">Team & community involvement</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Stethoscope className="mx-auto mb-4 text-blue-600" size={40} />
                <h4 className="font-semibold text-gray-800 mb-2">Clinical Experience</h4>
                <p className="text-sm text-gray-600">Hands-on patient care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Work & Research Experience</h2>
          <div className="space-y-8">
            {/* Work Experience */}
            {[ 
              {
                title: "Patient Care Technician",
                organization: "UT Southwestern Medical Center, Dallas, TX",
                period: "Aug 2023 – Mar 2025",
                description: [
                  "Perform hourly roundings and vital signs on patients",
                  "Assist patients in completing tasks like eating, using the restroom, and grooming themselves",
                  "Drain colostomies, urostomies, JP drains, and foleys"
                ],
                icon: <Stethoscope className="text-blue-600" size={24} />
              },
              {
                title: "Medical Assistant",
                organization: "Care United Medical Center, Forney, TX",
                period: "May 2023 – Aug 2024",
                description: [
                  "Interact with patients to take vital signs, document allergies and medical history",
                  "Give IM injections and vaccinations",
                  "Take COVID-19, Flu, Strep, Mono tests",
                  "Facilitate transitions between MA and physician care"
                ],
                icon: <Heart className="text-blue-600" size={24} />
              },
              {
                title: "Telemetry Monitor Technician",
                organization: "UT Southwestern Medical Center, Dallas, TX",
                period: "Jun 2022 – May 2023",
                description: [
                  "Monitor patient's heart rate and pulse ox to assist with interpretation and diagnosis of heart conditions",
                  "Perform cardiovascular tests on patients"
                ],
                icon: <Stethoscope className="text-blue-600" size={24} />
              },
              {
                title: "Election Clerk",
                organization: "Dallas County Election Department, Dallas, TX",
                period: "Jun 2016 – Sep 2016",
                description: [
                  "Checked voter identification and signed in registered voters prior to administering ballots",
                  "Oversaw election proceedings to maintain impartiality and fairness and assisted voters with adequate information"
                ],
                icon: <Award className="text-blue-600" size={24} />
              },
              // Research Experience
              {
                title: "Undergraduate Research Assistant",
                organization: "Computational Neuropsychology & Affective Neuroscience Lab, UT Dallas, Richardson, TX",
                period: "May 2023 – Jan 2024",
                description: [
                  "Contributed to projects integrating psychological and neurobiological risk factors",
                  "Investigated cognitive control, executive function, emotion regulation, and reward sensitivity in anxiety and mood disorders",
                  "Used R and R-Studio for statistical computing and data analysis"
                ],
                icon: <BookOpen className="text-blue-600" size={24} />
              },
              // Activities
              {
                title: "Choir Director",
                organization: "St. Thomas Syro-Malabar Catholic Church, Garland, TX",
                period: "Jan 2015 – Present",
                description: [
                  "Organize the youth choir and coordinate weekly/biweekly practices"
                ],
                icon: <Award className="text-blue-600" size={24} />
              },
              {
                title: "Member",
                organization: "Molding Doctors at UTD, Richardson, TX",
                period: "Aug 2022 – Aug 2023",
                description: [
                  "Explored opportunities for pre-med students such as social events and medically-related services"
                ],
                icon: <Heart className="text-blue-600" size={24} />
              },
              {
                title: "Internship",
                organization: "Medical City Dallas Hospital, Dallas, TX",
                period: "Sep 2018 – Jan 2019",
                description: [
                  "Helped transport patients and assisted with discharges in the post-anesthesia care unit (PACU)",
                  "Created and maintained facility documents and records",
                  "Helped restock medical instruments"
                ],
                icon: <Stethoscope className="text-blue-600" size={24} />
              }
            ].map((exp, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 p-3 rounded-lg">
                    {exp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{exp.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{exp.organization}</p>
                    <p className="text-gray-500 text-sm mb-3">{exp.period}</p>
                    <ul className="list-disc ml-5 text-gray-600">
                      {exp.description.map((d, i) => <li key={i}>{d}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Activities Section */}
      <section id="activities" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Activities</h2>
          <div className="space-y-8">
            {[
              {
                title: "EKG Technician",
                organization: "UTSW Medical Center, Dallas, TX",
                period: "Jun 2022 – Jul 2023",
                hours: "12 hrs/wk, 672 total",
                description: "In the telemetry room, I monitored heart rhythms and oxygen levels for nearly 50 patients. I organized my time to identify and chart each rhythm, then called the floor staff when changes occurred—such as V-tach, pauses, or desaturation. If a nurse or PCT did not respond, I followed strict escalation protocols. This role taught me to stay focused under pressure, communicate clearly, and take initiative in high-stakes situations.",
                icon: <Stethoscope className="text-blue-600" size={24} />
              },
              {
                title: "PACU Volunteer",
                organization: "Medical City Dallas Hospital, Dallas, TX",
                period: "Jun 2022 – Aug 2023",
                hours: "24 hrs/wk, 480 total",
                description: "Assisted in the post-anesthesia care unit by transporting patients, helping them settle in recovery, and preparing them for discharge. I often comforted groggy, anxious patients and supported nurses during busy moments. I also restocked supplies and organized surgical instruments to ensure readiness. This experience taught me how behind-the-scenes roles, strong communication, and small acts of care contribute meaningfully to the patient experience.",
                icon: <Heart className="text-blue-600" size={24} />
              },
              {
                title: "Medical Assistant",
                organization: "Care United Medical Center, Forney, TX",
                period: "May 2023 – Jul 2024",
                hours: "8 hrs/wk, 488 total",
                description: "A young boy clung to his mother as I prepared his vaccine, tears pooling in his eyes. I knelt beside him, explained each step, and held his hand as rapid tests, conducted. Children often flinch or pull away, and I learned to administer injections with both steadiness and care. I took vitals, ran rapid tests, documented histories, and worked directly with the physician to ensure smooth, efficient visits. This role sharpened my clinical proficiency, and showed how empathy enhances technical skill.",
                icon: <BookOpen className="text-blue-600" size={24} />
              },
              {
                title: "Patient Care Technician",
                organization: "UTSW Medical Center, Dallas, TX",
                period: "Aug 2023 – Jan 2025",
                hours: "12 hrs/wk, 912 total",
                description: "Mrs. A was one of the first patients I cared for—unable to move on her own, often silent during our early interactions. I took her vitals, provided catheter care, and repositioned her during rounds. I started learning her routine, when she preferred her hair brushed or her water refilled. Weeks later, I walked behind her for her first steps toward the hallway. Her progress reminded me that healing is not always fast or loud. It is often built quietly, through consistent care and collaboration.",
                icon: <Stethoscope className="text-blue-600" size={24} />
              },
              {
                title: "Secretary of Communication",
                organization: "Campus Emergency Response Team (CERT) at UTD, Richardson, TX",
                period: "Nov 2024 – May 2025",
                hours: "",
                description: "Manager of internal updates, meeting notes, and social media account for CERT. Responsible for keeping the team informed, taking meeting notes, and running the social media account to promote emergency preparedness and team activities.",
                icon: <Award className="text-blue-600" size={24} />
              }
            ].map((activity, index) => (
              <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200">
                <div className="flex items-start gap-4">
                  <div className="bg-white p-3 rounded-lg">
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{activity.title}</h3>
                    <p className="text-blue-600 font-medium mb-2">{activity.organization}</p>
                    <p className="text-gray-500 text-sm mb-1">{activity.period}{activity.hours && ` • ${activity.hours}`}</p>
                    <p className="text-gray-600">{activity.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md">
              <GraduationCap className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">Bachelor of Science, Neuroscience</h3>
              <p className="text-blue-600 font-medium mb-2">The University of Texas at Dallas</p>
              <p className="text-gray-600 mb-2">Richardson, TX</p>
              <p className="text-gray-600 mb-2">Expected May 2025</p>
              <p className="text-gray-600">Collegium V Honors</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-white p-8 rounded-lg shadow-md">
              <Award className="text-blue-600 mb-4" size={48} />
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">High School Diploma</h3>
              <p className="text-blue-600 font-medium mb-2">Sunnyvale High School</p>
              <p className="text-gray-600 mb-2">Sunnyvale, TX</p>
              <p className="text-gray-600 mb-2">Aug 2018 - May 2022</p>
              <p className="text-gray-600">Cumulative GPA: 3.96/4.0, Rank: 9/150</p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills, Certifications, and Awards Section */}
      <section id="skills" className="py-16 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Skills, Certifications & Awards</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Skills</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Team Leadership</li>
                <li>Communication</li>
                <li>Proficient in Microsoft Office</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Languages</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Fluent in English</li>
                <li>Fluent in Malayalam</li>
              </ul>
              <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Certifications & Training</h3>
              <ul className="space-y-2 text-gray-600">
                <li>Certified EKG Technician (NHA)</li>
                <li>Basic Life Support for Healthcare Providers (AHA)</li>
                <li>HIPAA Professional</li>
                <li>CPR/AED/First Aid (ARC)</li>
                <li>10-Hour OSHA General Industry Safety and Health</li>
                <li>Microsoft Certified Technology Specialist</li>
                <li>Certified Customer Service Professional</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Awards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>2nd Place at Nationals for Business Professionals of America Competition</li>
                <li>Top 5% of High School Graduating Class</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-800">Get In Touch</h2>
          <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
            I welcome connections with fellow medical professionals, researchers, and anyone interested in healthcare and service.
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Mail className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">joannesebastian04@gmail.com</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <Phone className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
              <p className="text-gray-600">(469) 371-6792</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-blue-50 rounded-lg">
              <MapPin className="text-blue-600 mb-4" size={32} />
              <h3 className="font-semibold text-gray-800 mb-2">Location</h3>
              <p className="text-gray-600">Sunnyvale, TX</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Joanne Sebastian. Aspiring Physician • Future Healer • Lifelong Learner
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
