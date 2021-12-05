const Alert = ({ message, makeFalse, width }) => {


      return (
            <div className={"alert alert-success alert-dismissible " + width} role="alert"> {message}
                  <button type="button" className="btn-close" aria-label="Close" onClick={makeFalse}></button>
            </div>
      );
}

export default Alert;