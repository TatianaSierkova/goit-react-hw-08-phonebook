const styles = {
    footer: {
        position: 'absolute',
        bottom: '0',
        width: '100%',
        left: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
};

const Footer = () => (
    <footer style={styles.footer}>
        <p>PhoneBook &copy; 2022 by</p>{' '}
        <a
        href="https://github.com/TatianaSierkova"
        target="_blank"
        rel="noreferrer noopener"
        >
        TatianaSierkova
        </a>
    </footer>
);

export default Footer;