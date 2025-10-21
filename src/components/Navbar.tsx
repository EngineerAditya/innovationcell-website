import { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('Home');

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About MIC', id: 'about' },
    { label: 'Events/Initiatives', id: 'events' },
    { label: 'Success Stories', id: 'testimonials' },
    { label: 'Contact/Join Us', id: 'contact' },
  ];

  // Track scroll position and update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems
        .filter(item => item.id !== null)
        .map(item => ({
          label: item.label,
          element: document.getElementById(item.id!),
        }));

      // Get current scroll position
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section we're in
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.label);
            return;
          }
        }
      }

      // Default to Home if at the very top
      if (window.scrollY < 100) {
        setActiveSection('Home');
      }
    };

    // Add scroll listener
    window.addEventListener('scroll', handleScroll);
    
    // Call once to set initial state
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (item: { label: string; id: string | null }) => {
    setActiveSection(item.label);
    
    if (item.id) {
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <nav
      className="fixed right-4 top-1/2 z-50 hidden -translate-y-1/2 md:block lg:right-8"
      aria-label="Main navigation"
    >
      <ul className="flex flex-col items-end gap-4">
        {navItems.map((item) => (
          <li key={item.label}>
            <button
              onClick={() => handleNavClick(item)}
              className={`group relative flex items-center gap-3 transition-all duration-300 ${
                activeSection === item.label ? 'opacity-100' : 'opacity-40 hover:opacity-70'
              }`}
              aria-label={`Navigate to ${item.label}`}
              aria-current={activeSection === item.label ? 'page' : undefined}
            >
              {/* Text label - shown on hover */}
              <span
                className={`text-sm font-medium tracking-tight text-black transition-all duration-300 ${
                  activeSection === item.label
                    ? 'translate-x-0 opacity-100'
                    : 'translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100'
                }`}
              >
                {item.label}
              </span>

              {/* Dot indicator */}
              <span
                className={`relative flex h-3 w-3 items-center justify-center transition-all duration-300 ${
                  activeSection === item.label ? 'scale-125' : 'scale-100'
                }`}
              >
                <span
                  className={`absolute inline-flex h-full w-full rounded-full bg-black transition-all duration-300 ${
                    activeSection === item.label ? 'opacity-100' : 'opacity-40'
                  }`}
                ></span>
                {activeSection === item.label && (
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-black"></span>
                )}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
