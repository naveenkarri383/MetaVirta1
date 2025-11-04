document.addEventListener('DOMContentLoaded', () => {

  // --- 1. ALL MATERIALS DATA ---
  const materialsData = [
    {
      subject: "Physical Metallurgy",
      texts: [
        { title: "Introduction to Crystal Structures", url: "#" },
        { title: "Point Defects: Vacancies and Interstitials", url: "#" },
        { title: "Dislocations and Plastic Deformation", url: "#" },
        { title: "Phase Diagrams: Gibbs Phase Rule", url: "#" },
        { title: "Eutectic and Eutectoid Reactions", url: "#" },
        { title: "The Iron-Carbon Diagram Explained", url: "#" },
        { title: "Diffusion in Solids: Fick's Laws", url: "#" },
        { title: "Phase Transformations: TTT & CCT Diagrams", url: "#" },
        { title: "Heat Treatment: Annealing and Normalizing", url: "#" },
        { title: "Hardening: Quenching and Tempering", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Crystal Structures and Defects", url: "#" },
        { title: "Visualizing Miller Indices", url: "#" },
        { title: "Lecture: Binary Phase Diagrams (Pb-Sn)", url: "#" },
        { title: "Steel Heat Treatment Process", url: "#" },
        { title: "Understanding TTT Diagrams", url: "#" },
        { title: "Recrystallization and Grain Growth", url: "#" },
        { title: "Solid-State Diffusion Simulation", url: "#" },
        { title: "Precipitation Hardening Explained", url: "#" },
        { title: "Martensitic Transformation", url: "#" },
        { title: "Intro to X-Ray Diffraction (XRD)", url: "#" },
      ],
      books: [
        { title: "Callister: Materials Science and Engineering", url: "#" },
        { title: "Reed-Hill & Abbaschian: Physical Metallurgy Principles", url: "#" },
        { title: "Porter & Easterling: Phase Transformations in Metals", url: "#" },
        { title: "Gaskell: Introduction to Thermodynamics of Materials", url: "#" },
        { title: "Shewmon: Diffusion in Solids", url: "#" },
        { title: "Avner: Introduction to Physical Metallurgy", url: "#" },
        { title: "Smallman: Modern Physical Metallurgy", url: "#" },
        { title: "Cullity: Introduction to X-Ray Diffraction", url: "#" },
        { title: "Raghavan: Materials Science and Engineering", url: "#" },
        { title: "Khanna: Physical Metallurgy", url: "#" },
      ]
    },
    {
      subject: "Mechanical Metallurgy",
      texts: [
        { title: "Stress and Strain: Engineering vs. True", url: "#" },
        { title: "The Tensile Test: Properties Explained", url: "#" },
        { title: "Hardness Testing: Rockwell, Brinell, Vickers", url: "#" },
        { title: "Impact Testing: Charpy and Izod", url: "#" },
        { title: "Fracture Mechanics: Stress Intensity Factor", url: "#" },
        { title: "Ductile vs. Brittle Fracture", url: "#" },
        { title: "Fatigue Failure: S-N Curves", url: "#" },
        { title: "Creep: High-Temperature Deformation", url: "#" },
        { title: "Strengthening Mechanisms in Metals", url: "#" },
        { title: "Fundamentals of Metal Forming", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Mechanical Behaviour of Materials", url: "#" },
        { title: "Tensile Test Simulation", url: "#" },
        { title: "How Fatigue Cracks Propagate", url: "#" },
        { title: "Understanding Fracture Toughness (K_IC)", url: "#" },
        { title: "The Titanic and Brittle Fracture", url: "#" },
        { title: "Creep Testing and Larson-Miller Plots", url: "#" },
        { title: "Dislocation strengthening", url: "#" },
        { title: "Charpy Impact Test Demonstration", url: "#" },
        { title: "Von Mises and Tresca Yield Criteria", url: "#" },
        { title: "Residual Stresses and Measurement", url: "#" },
      ],
      books: [
        { title: "Dieter: Mechanical Metallurgy", url: "#" },
        { title: "Hertzberg: Deformation and Fracture Mechanics", url: "#" },
        { title: "Courtney: Mechanical Behavior of Materials", url: "#" },
        { title: "Dowling: Mechanical Behavior of Materials", url: "#" },
        { title: "Suresh: Fatigue of Materials", url: "#" },
        { title: "Anderson: Fracture Mechanics: Fundamentals", url: "#" },
        { title: "Meyers & Chawla: Mechanical Behavior", url: "#" },
        { title: "Khan & Huang: Continuum Theory of Plasticity", url: "#" },
        { title: "Askeland & Wright: Science of Engineering Materials", url: "#" },
        { title: "Hosford: Mechanical Behavior of Materials", url: "#" },
      ]
    },
    {
      subject: "Extractive Metallurgy",
      texts: [
        { title: "Introduction to Extractive Metallurgy", url: "#" },
        { title: "Pyrometallurgy: Roasting and Smelting", url: "#" },
        { title:"Hydrometallurgy: Leaching and Solvent Extraction", url: "#" },
        { title: "Electrometallurgy: Electrowinning & Refining", url: "#" },
        { title: "The Iron Blast Furnace", url: "#" },
        { title: "Steelmaking: BOF and EAF", url: "#" },
        { title: "Production of Copper", url: "#" },
        { title: "Production of Aluminum (Hall-Héroult)", url: "#" },
        { title: "Titanium Extraction (Kroll Process)", url: "#" },
        { title: "Gold Extraction (Cyanidation)", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Principles of Extractive Metallurgy", url: "#" },
        { title: "How a Blast Furnace Works", url: "#" },
        { title: "Basic Oxygen Furnace (BOF) Animation", url: "#" },
        { title: "Copper Smelting and Converting", url: "#" },
        { title: "Aluminum Smelting Explained", url: "#" },
        { title: "Solvent Extraction (SX/EW) Process", url: "#" },
        { title: "Leaching Methods in Hydrometallurgy", url: "#" },
        { title: "Electric Arc Furnace (EAF) Steelmaking", url: "#" },
        { title: "Vacuum Arc Remelting (VAR)", url: "#" },
        { title: "Zone Refining for High Purity Metals", url: "#" },
      ],
      books: [
        { title: "Ray: Principles of Extractive Metallurgy", url: "#" },
        { title: "Biswas & Davenport: Extractive Metallurgy of Copper", url: "#" },
        { title: "Terkel Rosenqvist: Principles of Extractive Metallurgy", url: "#" },
        { title: "Habashi: Principles of Extractive Metallurgy", url: "#" },
        { title: "Ghosh & Chatterjee: Ironmaking and Steelmaking", url: "#" },
        { title: "Bodsworth: Physical Chemistry of Iron and Steel", url: "#" },
        { title: "Pehlke: Unit Processes of Extractive Metallurgy", url: "#" },
        { title: "Davenport: Extractive Metallurgy of Nickel, Cobalt", url: "#" },
        { title: "Gilchrist: Extraction of Metals", url: "#" },
        { title: "Hayes: Process Principles in Minerals & Materials", url: "#" },
      ]
    },
    {
      subject: "Metallurgical Thermodynamics",
      texts: [
        { title: "First Law of Thermodynamics", url: "#" },
        { title: "Enthalpy, Entropy, and the Second Law", url: "#" },
        { title: "Gibbs Free Energy and Spontaneity", url: "#" },
        { title: "Solutions: Ideal and Regular", url: "#" },
        { title: "Activity and Chemical Potential", url: "#" },
        { title: "Ellingham Diagrams Explained", url: "#" },
        { title: "Applications of Ellingham Diagrams in Smelting", url: "#" },
        { title: "Thermodynamics of Phase Diagrams", url: "#" },
        { title: "Thermodynamics of Solutions", url: "#" },
        { title: "Electrochemistry: Nernst Equation", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Metallurgical Thermodynamics", url: "#" },
        { title: "Understanding Gibbs Free Energy", url: "#" },
        { title: "How to Read an Ellingham Diagram", url: "#" },
        { title: "The First Law of Thermodynamics", url: "#" },
        { title: "Entropy: The Second Law", url: "#" },
        { title: "Chemical Potential and Activity", url: "#" },
        { title: "Lecture: Regular Solution Model", url: "#" },
        { title: "Third Law of Thermodynamics", url: "#" },
        { title: "Calculating Enthalpy of Reaction", url: "#" },
        { title: "Phase Equilibria", url: "#" },
      ],
      books: [
        { title: "Gaskell: Intro to Thermodynamics of Materials", url: "#" },
        { title: "Darken & Gurry: Physical Chemistry of Metals", url: "#" },
        { title: "Subbarao: Metallurgical Thermodynamics", url: "#" },
        { title: "Ahindra Ghosh: Textbook of Materials and Metallurgical Thermodynamics", url: "#" },
        { title: "DeHoff: Thermodynamics in Materials Science", url: "#" },
        { title: "Upadhyaya: Chemical Metallurgy", url: "#" },
        { title: "Poirier & Geiger: Transport Phenomena in Materials", url: "#" },
        { title: "Swalin: Thermodynamics of Solids", url: "#" },
        { title: "Lupis: Chemical Thermodynamics of Materials", url: "#" },
        { title: "Rao: Stoichiometry and Thermodynamics", url: "#" },
      ]
    },
    {
      subject: "Manufacturing Process",
      texts: [
        { title: "Fundamentals of Casting", url: "#" },
        { title: "Sand Casting: Molds and Patterns", url: "#" },
        { title: "Investment Casting and Die Casting", url: "#" },
        { title: "Rolling: Hot Rolling vs. Cold Rolling", url: "#" },
        { title: "Forging: Open-Die and Closed-Die", url: "#" },
        { title: "Extrusion and Drawing Processes", url: "#" },
        { title: "Sheet Metal Forming: Bending and Deep Drawing", url: "#" },
        { title: "Welding: SMAW, MIG, TIG", url: "#" },
        { title: "Powder Metallurgy", url: "#" },
        { title: "Fundamentals of Machining: Turning and Milling", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Manufacturing Processes", url: "#" },
        { title: "How Sand Casting Works", url: "#" },
        { title: "Lost Wax (Investment) Casting Process", url: "#" },
        { title: "Hot Rolling of Steel I-Beams", url: "#" },
        { title: "How Forging Makes Metal Stronger", url: "#" },
        { title: "Aluminum Extrusion Process", url: "#" },
        { title: "TIG Welding Demonstration", url: "#" },
        { title: "CNC Machining (Milling) Explained", url: "#" },
        { title: "Deep Drawing Process Animation", url: "#" },
        { title: "Powder Metallurgy: Sintering", url: "#" },
      ],
      books: [
        { title: "Kalpakjian & Schmid: Manufacturing Engineering", url: "#" },
        // --- THIS WAS THE TYPO ---
        { title: "Groover: Fundamentals of Modern Manufacturing", url: "#" },
        { title: "DeGarmo: Materials and Processes in Manufacturing", url: "#" },
        { title: "Rao: Manufacturing Technology", url: "#" },
        { title: "Beddoes: Principles of Metal Manufacturing", url: "#" },
        { title: "Heine, Loper, Rosenthal: Principles of Metal Casting", url: "#" },
        { title: "Rowe: Principles of Industrial Metalworking", url: "#" },
        { title: "Cary & Helzer: Modern Welding Technology", url: "#" },
        { title: "German: Powder Metallurgy Science", url: "#" },
        { title: "Schey: Introduction to Manufacturing Processes", url: "#" },
      ]
    },
    {
      subject: "Rate Process",
      texts: [
        { title: "Reaction Kinetics: Rate Laws", url: "#" },
        { title: "Arrhenius Equation and Activation Energy", url: "#" },
        { title: "Diffusion in Solids: Atomic Mechanisms", url: "#" },
        { title: "Fick's First and Second Laws", url: "#" },
        { title: "The Kirkendall Effect", url: "#" },
        { title: "Mass Transfer in Fluids", url: "#" },
        { title: "Convection and Boundary Layers", url: "#" },
        { title: "Heat Transfer: Conduction, Convection, Radiation", url: "#" },
        { title: "Nucleation and Growth Kinetics", url: "#" },
        { title: "Kinetics of Phase Transformations", url: "#" },
      ],
      videos: [
        { title: "NPTEL: Transport Phenomena", url: "#" },
        { title: "NPTEL: Kinetics of Metallurgical Processes", url: "#" },
        { title: "Visualizing Diffusion", url: "#" },
        { title: "Reaction Rates and Activation Energy", url: "#" },
        { title: "Understanding Fick's Second Law", url: "#" },
        { title: "Heat Transfer: Conduction", url: "#" },
        { title: "Mass Transfer: Boundary Layers", url: "#" },
        { title: "Nucleation Theory (Homogeneous)", url: "#" },
        { title: "Johnson-Mehl-Avrami (JMA) Kinetics", url: "#" },
        { title: "Lecture: Slag-Metal Reactions", url: "#" },
      ],
      books: [
        { title: "Poirier & Geiger: Transport Phenomena in Materials", url: "#" },
        { title: "Bird, Stewart, Lightfoot: Transport Phenomena", url: "#" },
        { title: "Szekely & Themelis: Rate Phenomena in Process", url: "#" },
        { title: "Incropera & DeWitt: Fundamentals of Heat and Mass Transfer", url: "#" },
        { title: "Gaskell: Intro to Thermodynamics (Kinetics part)", url: "#" },
        { title: "Paul & Shewmon: Diffusion in Solids", url: "#" },
        { title: "Cussler: Diffusion: Mass Transfer in Fluid Systems", url: "#" },
        { title:"Levenspiel: Chemical Reaction Engineering", url: "#" },
        { title: "Christian: The Theory of Transformations in Metals", url: "#" },
        { title: "Datta: Principles of Mass Transfer", url: "#" },
      ]
    },
    {
      subject: "Mathematics",
      texts: [
        { title: "Calculus: Differentiation and Integration", url: "#" },
        { title: "Intro to Ordinary Differential Equations (ODEs)", url: "#" },
        { title: "Solving Second-Order ODEs", url: "#" },
        { title: "Partial Differential Equations (PDEs)", url: "#" },
        { title: "Linear Algebra: Matrices and Vectors", url: "#" },
        { title: "Eigenvalues and Eigenvectors", url: "#" },
        { title: "Vector Calculus: Gradient, Divergence, Curl", url: "#" },
        { title: "Fourier Series and Transforms", url: "#" },
        { title: "Numerical Methods: Root Finding", url: "#" },
        { title: "Finite Difference Method (FDM)", url: "#" },
      ],
      videos: [
        { title: "3Blue1Brown: Essence of Linear Algebra", url: "#" },
        { title: "3Blue1Brown: Essence of Calculus", url: "#" },
        { title: "Professor Leonard: Calculus 1", url: "#" },
        { title: "NPTEL: Mathematics for Engineers", url: "#" },
        { title: "Solving the Heat Equation (PDE)", url: "#" },
        { title: "What are Eigenvectors?", url: "#" },
        { title: "Intro to Fourier Transforms", url: "#" },
        { title: "Newton-Raphson Method (Numerical)", url: "#" },
        { title: "Finite Element Method (FEM) Basics", url: "#" },
        { title: "Laplace Transforms", url: "#" },
      ],
      books: [
        { title: "Kreyszig: Advanced Engineering Mathematics", url: "#" },
        { title: "Thomas: Calculus", url: "#" },
        { title: "Strang: Introduction to Linear Algebra", url: "#" },
        { title: "Boyce & DiPrima: Differential Equations", url: "#" },
        { title: "Chapra & Canale: Numerical Methods for Engineers", url: "#" },
        { title: "Spiegel: Vector Analysis (Schaum's)", url: "#" },
        { title: "Arfken & Weber: Mathematical Methods for Physicists", url: "#" },
        { title: "Riley, Hobson, Bence: Mathematical Methods", url: "#" },
        { title: "Zill: A First Course in Differential Equations", url: "#" },
        { title: "Anton: Elementary Linear Algebra", url: "#" },
      ]
    },
  ];

  // --- 2. DOM References ---
  const container = document.getElementById('materials-library-container');
  const subjectFilter = document.getElementById('subject-filter');
  const searchInput = document.getElementById('materials-search');

  // --- 3. Render Function ---

  /**
   * Generates the HTML for a single list of links (texts, videos, or books)
   * This is the REFACTORED, simpler function.
   */
  function buildLinksList(items, searchTerm) {
    // Filter items based on the search term
    const filteredItems = items.filter(item => 
      item.title.toLowerCase().includes(searchTerm)
    );
    
    // Return a string of <li> elements or an empty string
    return filteredItems.map(item => 
      `<li><a href="${item.url}" target="_blank">${item.title}</a></li>`
    ).join('');
  }

  /**
   * Main function to build and display the entire library based on filters
   * This is the REFACTORED, more robust function.
   */
  function displayMaterials() {
    const filterValue = subjectFilter.value;
    const searchValue = searchInput.value.toLowerCase();
    
    container.innerHTML = ''; // Clear previous results
    
    let subjectsFound = false;

    materialsData.forEach(subject => {
      // 1. Check if the subject matches the dropdown filter
      if (filterValue !== 'all' && subject.subject !== filterValue) {
        return; // Skip this subject, it doesn't match the filter
      }
      
      // 2. Get the HTML for all links that match the search term
      const textsHTML = buildLinksList(subject.texts, searchValue);
      const videosHTML = buildLinksList(subject.videos, searchValue);
      const booksHTML = buildLinksList(subject.books, searchValue);
      
      // 3. Check if any results were found for this subject
      // If all three lists are empty strings, don't show this subject card
      if (textsHTML.length === 0 && videosHTML.length === 0 && booksHTML.length === 0) {
         return; // Skip this subject, search yielded no results
      }
      
      subjectsFound = true;
      
      // 4. Build the HTML for this subject card
      const subjectCard = document.createElement('div');
      subjectCard.className = 'card material-subject-card';
      
      // Use ternary operators to show a message if a section is empty
      subjectCard.innerHTML = `
        <h2>${subject.subject}</h2>
        <div class="material-sections-grid">
          <div class="material-section">
            <h3>Study Materials (Texts)</h3>
            ${textsHTML.length > 0 ? `<ul>${textsHTML}</ul>` : '<p class="no-results">No matching texts.</p>'}
          </div>
          <div class="material-section">
            <h3>Video Sources</h3>
            ${videosHTML.length > 0 ? `<ul>${videosHTML}</ul>` : '<p class="no-results">No matching videos.</p>'}
          </div>
          <div class="material-section">
            <h3>Reference Textbooks</h3>
            ${booksHTML.length > 0 ? `<ul>${booksHTML}</ul>` : '<p class="no-results">No matching books.</p>'}
          </div>
        </div>
      `;
      
      container.appendChild(subjectCard);
    });
    
    if (!subjectsFound) {
      container.innerHTML = '<p class="no-results-main">No subjects match your search or filter.</p>';
    }
  }

  // --- 4. Event Listeners ---
  subjectFilter.addEventListener('change', displayMaterials);
  searchInput.addEventListener('keyup', displayMaterials);

  // --- 5. Initial Load ---
  displayMaterials();
});