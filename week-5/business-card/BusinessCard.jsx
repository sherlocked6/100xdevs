export function BusinessCard(props){
    const card = props.card;

    console.log(card.interests);
    return (
    <div style={styles.card}>
        <h1 style={styles.name}>{card.name}</h1>
        <p style={styles.description}>{card.description}</p>
        <h3 style={styles.interestsHeader}>Interests</h3>
        <ul style={styles.interestsList}>
            {card.interests.map((interset) => (
                <li style={styles.interestItem}>{interset}</li>
            ))}
        </ul>
        <div style={styles.socialLinks}>
            <a href={card.linkedin} target="_blank" rel="noopener noreferrer" style={{...styles.link, marginLeft: '0px'}}>Linkedin</a>
            <a href={card.twitter} target="_blank" rel="noopener noreferrer" style={styles.link}>Twitter</a>
        </div>
    </div>)
}


const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px',
        margin: '20px',
        maxWidth: '400px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#f8f9fa'
      },
      name: {
        fontSize: "24px",
        marginBottom: "10px",
        color: '#333'
      },
      description: {
        fontSize: "15px",
        marginBottom: "15px",
        color: '#555'
      },
      interestsHeader: {
        fontSize: '18px',
        marginBottom: '10px',
        color: '#333',
      },
      interestsList: {
        listStyle: 'none',
        padding: 0,
        margin: 0,
      },
      interestItem: {
        fontSize: '14px',
        marginBottom: '5px',
        color: '#555',
      },
      socialLinks: {
        display: 'flex',
        marginBottom: '15px',
      },
      link: {
        textDecoration: 'none',
        color: '#1C2833', // Text color
        padding: '10px 15px', // Padding for the button
        borderRadius: '5px', // Border radius for rounded corners
        backgroundColor: '#DC7633', // Background color for the button
        //display: 'inline-block', // Display as inline-block to be side by side
        margin: '15px', // Margin between buttons
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', // Box shadow for a subtle lift
      }
}