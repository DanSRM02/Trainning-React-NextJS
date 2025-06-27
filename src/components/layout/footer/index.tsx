function Footer() {
  return (
    <footer className="w-full p-4 bg-gray-800 text-gray-300 flex flex-col sm:flex-row justify-between items-center mt-10 text-sm">
    
      <div className="mb-2 sm:mb-0">        
        <span className="font-bold">React Post</span>. All Rights Reserved.
      </div>
      
      <div className="flex gap-4">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >          
          [Twitter]
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >          
          [GitHub]
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition-colors"
        >          
          [LinkedIn]
        </a>
      </div>
    </footer>
  );
}

export default Footer;
