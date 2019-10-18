import { connect } from "react-redux";
import SideBar from "./SideBar";

const mapStateToProps = state => {
  return {
    navLinks: state.sidebar.navLinks,
    sidebarFriends: state.sidebar.friends
  };
};
const mapDispatchToProps = () => {
  return {};
};

const SidebarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);

export default SidebarContainer;
