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
import { TypedMainMenuQuery } from "./queries";

import hamburgerHoverImg from "../../images/hamburger-hover.svg";
import hamburgerImg from "../../images/hamburger.svg";
import logoImg from "../../images/logorey.svg";
import searchImg from "../../images/search.svg";
import userImg from "../../images/user.svg";

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
        <>
        
        <div className="top-banner"> </div>

       <nav className="main-menu" id="header">
          <div className="main-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <ul>
                    <Media
                      query={{ maxWidth: mediumScreen }}
                      render={() => (
                        <li
                          className="main-menu__hamburger"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.sideNav,
                              OverlayTheme.left,
                              { data: items }
                            )
                          }
                        >
                          <ReactSVG
                            path={hamburgerImg}
                            className={"main-menu__hamburger--icon"}
                          />
                          <ReactSVG
                            path={hamburgerHoverImg}
                            className={"main-menu__hamburger--hover"}
                          />
                        </li>
                      )}
                    />                    
                    <Media
                      query={{ minWidth: smallScreen }}
                      render={() => (
                        <div className="main-menu__left__logo">
                          <Link to={appPaths.baseUrl}>
                            <ReactSVG path={logoImg} />
                          </Link> 
                        </div>   
                      )}
                    />
                    
                <Online>
                <Media
                  query={{ maxWidth: smallScreen }}
                  render={() => (
                    <>
                      {user ? (
                        <MenuDropdown
                          suffixClass={'__rightdown'}
                          head={
                            <li className="main-menu__icon main-menu__user--active">
                              <ReactSVG path={userImg} />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
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
                            </ul>
                          }
                        />
                      ) : (
                        <li
                          data-testid="login-btn"
                          className="main-menu__icon"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.left
                            )
                          }
                        >
                          <ReactSVG path={userImg} />
                        </li>
                      )}
                    </>
                  )}
                />
              </Online>
                  </ul>
                );
              }}
            </TypedMainMenuQuery>
          </div>

          <div className="main-menu__center">
          <Media
            query={{ maxWidth: smallScreen }}
            render={() => (
              <Link to={appPaths.baseUrl}>
                    <ReactSVG path={logoImg} />
                  </Link>    
            )}
          />                                 
          </div>

          <div className="main-menu__right">
            <ul>
              <Online>
              <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <li className="phone">786 431 2103</li>    
                  )}
                /> 
                <Media
                  query={{ minWidth: smallScreen }}
                  render={() => (
                    <>
                      {user ? (
                        <MenuDropdown
                          head={
                            <li className="main-menu__icon main-menu__user--active">

                              <ReactSVG path={userImg} />
                              <Media
                        query={{ minWidth: mediumScreen }}
                        render={() => <span>Mi cuenta</span>}
                  />
                            </li>
                          }
                          content={
                            <ul className="main-menu__dropdown">
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
                            </ul>
                          }
                        />
                      ) : (
                        <li
                          data-testid="login-btn"
                          className="main-menu__icon"
                          onClick={() =>
                            overlayContext.show(
                              OverlayType.login,
                              OverlayTheme.right
                            )
                          }
                        >

<svg width="1.8em" height="1.9em" viewBox="0 0 16 15" className="bi bi-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0zM8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm6 5c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z"></path></svg>
                          <Media
                        query={{ minWidth: mediumScreen }}
                        render={() => <span className="icon-shorttext">Entrar</span>}
                  />
                        </li>
                      )}
                    </>
                  )}
                />
                <li
                  className="main-menu__icon main-menu__cart"
                  onClick={() => {
                    overlayContext.show(OverlayType.cart, OverlayTheme.right);
                  }}
                >
                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-cart3" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm7 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                  </svg>
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Carrito</span>}
                  />
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
                    render={() => <span>Offline</span>}
                  />
                </li>
              </Offline>
              <Media
                query={{ minWidth: mediumScreen }}
                render={() => 
                  <li
                  className="main-menu__search"
                  onClick={() =>
                    overlayContext.show(OverlayType.search, OverlayTheme.right)
                  }
                >

                  <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
  <path fill-rule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
</svg>
                  <Media
                    query={{ minWidth: mediumScreen }}
                    render={() => <span>Buscar</span>}
                  />
                </li>
                }      
              />             
            </ul>

          </div>             
        </nav>
        <Media
          query={{ maxWidth: mediumScreen }}
          render={() => 
          <div className="search-bar"
            onClick={() =>
              overlayContext.show(OverlayType.search, OverlayTheme.right)
            }>
              <ReactSVG className="search-bar__search-icon" path={searchImg} />
              <input className="search-bar__search-input" placeholder="Buscar" type="text" ></input> 
            </div>           
          } />                  
        </>
      )}    
    </OverlayContext.Consumer>          

    {/* Subheader */}
    <Media
        query={{ minWidth: mediumScreen }}
        render={() => 
      <OverlayContext.Consumer>
      {overlayContext => (
        <nav className="sub-menu" id="sub_header">
          <div className="sub-menu__left">
            <TypedMainMenuQuery renderOnError displayLoader={false}>
              {({ data }) => {
                const items = maybe(() => data.shop.navigation.main.items, []);

                return (
                  <><ul>
                    <li
                      className="sub-menu__hamburger"
                      onClick={() => overlayContext.show(
                        OverlayType.sideNav,
                        OverlayTheme.left,
                        { data: items }
                      )}
                    >
                      <ReactSVG
                        path={hamburgerImg}
                        className={"sub-menu__hamburger--icon"} />
                      <ReactSVG
                        path={hamburgerHoverImg}
                        className={"sub-menu__hamburger--hover"} />
                        Departamentos
                      
                    </li>
                                
                  </ul>
                  
                  </>
                );
              } }
            </TypedMainMenuQuery>
          </div>

          <div className="sub-menu__center"></div>

          <div className="sub-menu__right">
          <Media
                  query={{ minWidth: mediumScreen }}
                  render={() => 
                    <ul>
                      <li className="normal-text"><a href="#">Autos</a></li>
                      <li className="normal-text"><a href="#">Hoteles</a></li>
                      <li className="normal-text"><a href="#">Vuelos</a></li>
                      <li className="large-text"><a href="#">Envíos marítimos</a></li>
                      <li className="large-text"><a href="#">Paquetería Express</a></li>
                      <li className="normal-text"><a href="#">Trámites</a></li>
                      <li className="normal-text"><a href="#">Recargas</a></li>
                      <li className="normal-text"><a href="#">Tienda</a></li>
                    </ul>              
            } />       
          </div>
        </nav>
      )}
    </OverlayContext.Consumer>                 
    } />           
    </>
  );
};

export default MainMenu;