import React from 'react'
import {
  Avatar, Button, Chip, Grid,
  IconButton,
  List, ListItem, ListItemAvatar,
  ListItemSecondaryAction,
  ListItemText, makeStyles,
  Paper, Tab, Tabs, Typography,
  useTheme
} from '@material-ui/core';
import BreadcrumbsCustom from 'components/BreadcrumbsCustom';
import { Link, useNavigate, useParams } from 'react-router-dom';
import avatar from 'assets/images/avatar.jpg'
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import SwipeableViews from 'react-swipeable-views';
import TabPanelProfile from './TabPanelProfile';
import LaptopWindowsIcon from '@material-ui/icons/LaptopWindows';
import AppleIcon from '@material-ui/icons/Apple';
import AndroidIcon from '@material-ui/icons/Android';
import DesktopMacIcon from '@material-ui/icons/DesktopMac';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch, useSelector } from 'react-redux';
import { getUserById } from 'redux/manageUser/action';
import { selectedUser } from 'redux/manageUser/selector';

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: 70,
  },

  btn: {
    borderRadius: 25,
    fontWeight: 700,
    padding: theme.spacing(1, 1),
    minWidth: 75,
    marginRight: theme.spacing.apply(2),
  },

  mainTitle: {
    marginTop: theme.spacing(2),
    fontSize: '40px',
    fontWeight: 700,
    fontFamily: 'Poppins',
    color: 'grey',
    textShadow: '1px 3px 5px rgba(0, 0, 0, 0.3)'
  },

  paper: {
    minHeight: '100%',
    padding: theme.spacing(3)
  },

  imageFrame: {
    width: 200,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden'
  },

  avatar: {
    width: 200,
    height: 200,
    objectFit: 'cover',
  },

  metaImage: {
    marginTop: theme.spacing(2),
    textAlign: 'center'
  },

  fullnameProfile: {
    color: '#8FBDD3',
    fontSize: 24,
    fontWeight: 500,
    fontFamily: 'Poppins'
  },

  titleField: {
    fontSize: 24,
    marginTop: theme.spacing(1),
    fontWeight: 600,
    color: '#1572A1',
  },

  dataField: {
    fontSize: 24,
    marginTop: theme.spacing(1),
    // fontWeight: 600,
    color: '#1572A1',
    '& a': {
      color: '#1572A1',
      fontStyle: 'italic',
      '&:hover': {
        color: '#1872C5',
      }
    }
  },

}))

const breadCrumbsList = {
  list: [
    { name: 'Manage Users', path: '/admin/manage-users' },
  ],
  active: 'View Profile'
}

function UserProfile() {
  const params = useParams();
  const dispatch = useDispatch();
  const classes = useStyles();
  const navigate = useNavigate();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const handleNavigate = (uri) => {
    navigate(uri)
  }

  React.useEffect(() => {
    dispatch(getUserById(params.id));
  }, [dispatch, params.id])

  const user = useSelector(selectedUser)
  return (
    <div className={classes.container}>
      <BreadcrumbsCustom breadCrumbsList={breadCrumbsList} />
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item className={classes.mainTitle}>User profile</Grid>
        <Grid item>
          <Button
            variant="contained"
            color="secondary"
            className={classes.btn}
            onClick={() => handleNavigate("/admin/manage-users")}
          >
            Back
          </Button>
        </Grid>
      </Grid>
      <Grid container spacing={2} style={{marginTop: "20px"}}>
        <Grid
          item
          xs={12}
          sm={4}
          lg={4}
          md={4}
        >
          <Paper className={classes.paper}>
            <Grid container direction='column' alignItems='center'>
              <Grid
                item
                style={{ width: '100%', textAlign: 'center' }}
                container
                direction='column'
                alignItems='center'
              >
                <Grid item>
                  <div className={classes.imageFrame}>
                    <img src={avatar} alt="avartar" className={classes.avatar} />
                  </div>
                </Grid>
                <div className={classes.metaImage}>
                  <Typography className={classes.fullnameProfile}>{user && user.fullname}</Typography>
                  <Chip
                    color="primary"
                    icon={<FiberManualRecordIcon />}
                    label={user && user.role}
                    variant="outlined"
                  />
                </div>
              </Grid>

              <Grid item style={{ width: '100%' }}>
                <List>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <FacebookIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="FaceBook" secondary="Goto FaceBook" />
                  </ListItem>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <InstagramIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Instagram" secondary="Goto Instagram" />
                  </ListItem>
                  <ListItem button>
                    <ListItemAvatar>
                      <Avatar>
                        <TwitterIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Twitter" secondary="Goto Twitter" />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid
          item
          xs={12}
          sm={8}
          lg={8}
          md={8}
        >
          <Paper className={classes.paper}>
            <div>
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example"
              >
                <Tab label="Infomation Detail" />
                <Tab label="Login History" />
              </Tabs>
              <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
              >
                <TabPanelProfile value={value} index={0} dir={theme.direction}>
                  <Grid container>
                    <Grid item sm={6} md={6} lg={6}>
                      <Typography className={classes.titleField}>UserID: </Typography>
                      <Typography className={classes.titleField}>UserName: </Typography>
                      <Typography className={classes.titleField}>FullName</Typography>
                      <Typography className={classes.titleField}>Email: </Typography>
                      <Typography className={classes.titleField}>Role: </Typography>
                      <Typography className={classes.titleField}>Address: </Typography>
                      <Typography className={classes.titleField}>Login&Security: </Typography>
                    </Grid>
                    <Grid item sm={6} md={6} lg={6}>
                      <Typography className={classes.dataField}>{user && user.id}</Typography>
                      <Typography className={classes.dataField}>{user && user.username}</Typography>
                      <Typography className={classes.dataField}>{user && user.fullname}</Typography>
                      <Typography className={classes.dataField}>{user && user.email}</Typography>
                      <Typography className={classes.dataField}>{user && user.role}</Typography>
                      <Typography className={classes.dataField}>{user && user.address}</Typography>
                      <Typography className={classes.dataField}>
                        <Link to="/manage-user/changepassword"> ChangePassword </Link>
                        <br />
                        <Link to="/manage-user/two-factor-passowrd"> Change two-factor Password  </Link>
                      </Typography>
                    </Grid>
                  </Grid>
                </TabPanelProfile>
                <TabPanelProfile value={value} index={1} dir={theme.direction}>
                  <List>
                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <LaptopWindowsIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Windows - Google Chrome" secondary="Last login: 10/02/2022" />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <DesktopMacIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Linux-FireFox Browser" secondary="Last login: 10/02/2022" />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <AppleIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="MacOs-Safary Browser" secondary="Last login: 10/02/2022" />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>

                    <ListItem button>
                      <ListItemAvatar>
                        <Avatar>
                          <AndroidIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText primary="Android-Brave browser" secondary="Last login: 10/02/2022" />
                      <ListItemSecondaryAction>
                        <IconButton edge="end" aria-label="delete" color="secondary">
                          <DeleteIcon />
                        </IconButton>
                      </ListItemSecondaryAction>
                    </ListItem>
                  </List>
                </TabPanelProfile>
              </SwipeableViews>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default UserProfile