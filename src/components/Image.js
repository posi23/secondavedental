const Image = ({ src, alt }) => {
      return (
            <div>

                  <img src={src} alt={alt} className="img-fluid" />
            </div>
      );
}

export default Image;