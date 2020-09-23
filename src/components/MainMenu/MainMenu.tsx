import React from "react";
import {
  mediumScreen,
  smallScreen,
} from "../../globalStyles/scss/variables.scss";
import "./scss/index.scss";

import { useCart, useSignOut, useUserDetails } from "@sdk/react";

import Media from "react-media";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import {
  MenuDropdown,
  Offline,
  Online,
  OverlayContext,
  OverlayTheme,
  OverlayType,
} from "..";
import * as appPaths from "../../app/routes";
import { maybe } from "../../core/utils";
import NavDropdown from "./NavDropdown";
import { TypedMainMenuQuery } from "./queries";

import cartImg from "../../images/cart.svg";
import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import logoImg from "../../images/logo.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";
import { xLargeScreen } from "@temp/@next/globalStyles/constants";

const MainMenu: React.FC = () => {
  const { data: user } = useUserDetails();
  const [signOut] = useSignOut();
  const { items } = useCart();

  const handleSignOut = () => {
    signOut();
  };

  const cartItemsQuantity =
    (items &&
      items.reduce((prevVal, currVal) => prevVal + currVal.quantity, 0)) ||
    0;

  return (
    <><OverlayContext.Consumer>
      {overlayContext => (
        <nav className="main-menu" id="header">
          <div className="main-menu__left">
          <img src={require('../../images/logorey.png')}/>
        </div>

          <div className="main-menu__center">

          <ul>
              <li
                className="main-menu__search"
                onClick={() => overlayContext.show(OverlayType.search, OverlayTheme.right)}
              >
                <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => <span>Buscar</span>} />
                <ReactSVG path={searchImg} />
              </li>

              </ul>
            
          </div>

          <div className="main-menu__right">
            <ul>
              <li
                className="main-menu__phone" >
 1 768 431 2103
              </li>
              <Online>
              {user ? (
                        <MenuDropdown
                          head={<li className="main-menu__icon main-menu__user--active">
                            <ReactSVG path={userImg} />
                          </li>}
                          content={<ul className="main-menu__dropdown">
                            <li data-testid="my_account__link">
                              <Link to={appPaths.accountUrl}>My Account</Link>
                            </li>
                            <li data-testid="order_history__link">
                              <Link to={appPaths.orderHistoryUrl}>
                                Order history
                              </Link>
                            </li>
                            <li data-testid="address_book__link">
                              <Link to={appPaths.addressBookUrl}>
                                Address book
                              </Link>
                            </li>
                            <li
                              onClick={handleSignOut}
                              data-testid="logout-link"
                            >
                                                Log Out
                            </li>
                          </ul>} />
                      ) : (
                          <li
                            data-testid="login-btn"
                            className="main-menu__icon"
                            onClick={() => overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.right
                            )}
                          >
                            <ReactSVG path={userImg} />
                          </li>
                        )}
                <li
                  className="main-menu__icon main-menu__cart"
                  onClick={() => {
                    overlayContext.show(OverlayType.cart, OverlayTheme.right);
                  } }
                >
                  <ReactSVG path={cartImg} />
                  {cartItemsQuantity > 0 ? (
                    <span className="main-menu__cart__quantity">
                      {cartItemsQuantity}
                    </span>
                  ) : null}
                </li>
              </Online>
              <Offline>
                <li className="main-menu__offline">
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Offline</span>} />
                </li>
              </Offline>
              
            </ul>
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>
      
    <OverlayContext.Consumer>
      {overlayContext => (
        <nav className="main-menu" id="sub_header">
          <div className="main-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <ul>
                    <li
                      className="main-menu__hamburger"
                      onClick={() => overlayContext.show(
                        OverlayType.sideNav,
                        OverlayTheme.left,
                        { data: items }
                      )}
                    >
                      <ReactSVG
                        path={hamburgerImg}
                        className={"main-menu__hamburger--icon"} />
                      <ReactSVG
                        path={hamburgerHoverImg}
                        className={"main-menu__hamburger--hover"} />
                      <span>Departamentos</span>
                    </li>
                    
                    
                  </ul>
                );
              } }
            </TypedMainMenuQuery>
          </div>

          <div className="main-menu__center">
            
          </div>

          <div className="main-menu__right">
          <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => 
                    <div className="main-menu__links">

                      <a href="#">Autos</a>
                      <a href="#">Hoteles</a>
                      <a href="#">Vuelos</a>
                      <a href="#">Envíos marítimos</a>
                      <a href="#">Paquetería Express</a>
                      <a href="#">Trámites</a>
                      <a href="#">Recargas</a>
                      <a href="#">Tienda</a>
                    </div>                
            } />       
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>

      </>
  );
};

export default MainMenu;
