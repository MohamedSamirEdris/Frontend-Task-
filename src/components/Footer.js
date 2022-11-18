import { Paper, Box, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Box2 = styled(Typography)(({ theme }) => ({
  width: '100%',
  background:
    'linear-gradient(0deg, rgba(253,253,255,1) 0%, rgba(126,126,126,1) 0%, rgba(255,255,255,1) 100%)',
  display: 'flex',
  paddingBottom: '4rem',
  [theme.breakpoints.down('sm')]: {
    paddingLeft: '1rem',
  },
}));

const Footer = () => {
  return (
    <Paper
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <Box2>
        <Box
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <Box
            sx={{ fontSize: 'smaller', display: { xs: 'block', sm: 'none' } }}
          >
            <h3>OUR ADDRESS:</h3>
            <p>
              Cairo, Egypt <br />
            </p>
            <h3>Phone Number:</h3>
            <p>+20 544 962 23 37</p>
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
            <h3>OUR ADDRESS:</h3>
            <p>
              Cairo, Egypt <br />
            </p>
            <h3>Phone Number:</h3>
            <p>+20 544 962 23 37</p>
          </Box>
        </Box>
        <Box
          style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <h3>Follow us:</h3>
          <ul style={{ listStyle: 'none' }}>
            <li>
              <a
                href="https://github.com/MohamedSamirEdris"
                style={{ color: 'black' }}
              >
                <GitHubIcon />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/mohamed-samir-0756b0b5/"
                style={{ color: 'black' }}
              >
                <LinkedInIcon />
              </a>
            </li>
          </ul>
        </Box>
      </Box2>
    </Paper>
  );
};

export default Footer;
