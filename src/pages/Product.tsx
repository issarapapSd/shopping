import React from 'react'
import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';
import Paper from '@mui/material/Paper';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));
const Product = () => {
  return (
    <div>
      <div style={{ paddingTop: '5%' }}>
        <Typography style={{ textAlign: 'center', fontWeight: 'bold', paddingTop: '20px' }} gutterBottom variant="h5" component="div">
          Products
        </Typography>
      </div>
      <div style={{ textAlign: 'center' }}>
        <Typography variant="body1" style={{ textAlign: 'center' }}>
          สินค้าทั้งหมด
        </Typography >
      </div>
      <Container maxWidth="xl" className='bodyTop'>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
            {Array.from(Array(6)).map((_, index) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 140 }}
                    image="https://www.grandprix.co.th/wp-content/uploads/2018/05/Nike-Air-Jordan-3-Retro-5-600x400@2x.jpg"
                    title="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      NIKE AIR JORDAN 3 RETRO
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      รองเท้ารุ่น Air Jordan 3 Retro ที่โดดเด่นด้วยระบบลดแรงกระแทกน้ำหนักเบาที่มองเห็นได้
                      เพื่อความกระชับสบายในสไตล์ออริจินัล โครงสร้างจากหนังมอบความทนทาน และรายละเอียดแบบซิกเนเจอร์
                      เพื่อเป็นการเฉลิมฉลองให้กับไอคอนจอมพลิกเกม อย่าง Michael Jordan
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>

    </div>
  )
}

export default Product