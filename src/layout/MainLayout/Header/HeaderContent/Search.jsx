import { Box, FormControl, InputAdornment, OutlinedInput } from '@mui/material';
import { SearchOutlined } from '@ant-design/icons';

const Search = () => (
  <Box sx={{ width: '100%', ml: { xs: 0, md: 96 } }}>
      <OutlinedInput sx={{
        borderRadius: '15px',
        background: '#2F293E',
        color:'#E2D8FD',
      }}
        endAdornment={
          <InputAdornment position="start" sx={{ mr: -0.5 }}>
            <SearchOutlined  style={{
              color:'#E2D8FD'
            }}/>
          </InputAdornment>
        }
        aria-describedby="header-search-text"
        inputProps={{
          'aria-label': 'weight'
        }}
        placeholder="Search"
      />
  </Box>
);

export default Search;
