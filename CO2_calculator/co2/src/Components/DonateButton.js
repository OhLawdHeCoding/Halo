function DonateButton() {
    const handleClick = () => { 
        window.open("http://wfp.org");
      };

      return (
        <button onClick={handleClick}>Donate</button>

      );
    

}

export default DonateButton;


 