
const Footer = ({className='', children}) => {
    return (
      <footer className={`footer border-t border-gray-300 shadow-lg ${className}`}>
        <div className="container">
            {children}
        </div>
    </footer>
    )
  }
  
  export default Footer