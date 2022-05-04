import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import styled from 'styled-components/macro';
import toCurrency from 'utils/FormatNumber';

const useStyles = makeStyles((theme) => ({
  paper: {
    color: theme.palette.text.secondary,
    minHeight: 400,
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: theme.spacing(2),
    justifyContent: 'flex-start',
    height: 60,
    borderBottom: '1px solid #F1F5F9',
  },

  title: {
    fontSize: 18,
    fontWeight: 700,
    color: '#1E293B',
  },

  content: {
    padding: theme.spacing(0, 2, 2, 2),
  },

  productItem: {
    '&:not(:last-child)': {
      borderBottom: 'solid 1px #E2E8F0',
    },
  },
}));
const data = [
  {
    Product: 'Mojito',
    link: '/category/mojito',
    access_times: '715',
  },
  {
    Product: 'Coffee',
    link: '/category/coffee',
    access_times: '457',
  },
  {
    Product: 'Fresh Tea',
    link: '/category/fresh-tea',
    access_times: '754',
  },
  {
    Product: 'Smoothie',
    link: '/category/smoothie',
    access_times: '862',
  },
  {
    Product: 'Special',
    link: '/category/special',
    access_times: '1569',
  },
];
function TopVisitedCategory() {
  const classes = useStyles();
  return (
    <div className={classes.paper}>
      <div cotainer className={classes.header}>
        <Typography className={classes.title}> Top 5 number of visitor by category </Typography>
      </div>
      <div className={classes.content}>
        {data.map((menuitem) => (
          <Grid key={menuitem.Product} className={classes.productItem}>
            <Grid container justifyContent="space-between" alignItems="center">
              <Grid>
                <Title>
                  {menuitem.Product}
                </Title>
                <Text>
                  {menuitem.link}
                </Text>
              </Grid>
              <Grid>
                <Typography style={{ color: '#1E293B', fontSize: 16 }}>
                  {toCurrency(menuitem.access_times)}
                  {' '}
                  <span style={{ color: '#64748B' }}>
                    lượt
                  </span>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        ))}
      </div>
    </div>
  );
}

export default TopVisitedCategory;
const Title = styled.p`
  margin-top: 6px;
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-style: bold;
  color: #000000;
`;
const Text = styled.p`
  margin-bottom: 6px;
  text-align: flex-start;
  font-size: 14px;
  font-weight: normal;
  color: #9D9D9D;
`;
