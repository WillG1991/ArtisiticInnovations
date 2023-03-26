const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    h2: {
      fontSize: '2.6em',
      fontWeight: 'bold',
      textAlign: 'center',
      fontFamily: 'segoeFont',
    },
    h3: {
      fontSize: '1.4em',
      textAlign: 'center',
      margin: '1em 0',
      width: "90%"
    },
    imageContainer: {
      display: 'flex',
      justifyContent: 'center',
      margin: '2em 0',
      width: '90vw',
      flexDirection: 'row',
    },
    button: {
      backgroundColor: 'hsl(274deg 53% 63%)',
      color: 'white',
      padding: '0.5em 1em',
      borderRadius: '2em',
      border: 'none',
      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
      marginTop: '2em',
      fontFamily: 'segoeFont',
      fontWeight: 'bold',
      fontSize: '1em',
      textTransform: 'none',
      transition: 'color 0.3s ease-in-out',
      '&:hover': {
        backgroundColor: 'hsl(274deg 53% 50%)',
        color: 'blue',
      },
    },
    masonryContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '50vh',
    },
    loading: {
      color: 'hsl(274deg 53% 63%)', // purple color
    },
  };

  export default styles;