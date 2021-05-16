import React, { useEffect, useState } from 'react'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

const HeaderHomepage = (props) => {
const [category, setCategory] = useState([]);
  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await fetch(`http://localhost:3006/category`);
        const category = await response.json();

        setCategory(category)
        console.log(category);

      } catch (error) {
        console.log(error)

      }
    }
    getCategory();



  }, [])


  return (
    <header id="header" className="header style-04 header-dark">
      <div className="header-top">
        <div className="container">
          <div className="header-top-inner">
            <ul id="menu-top-left-menu" className="akasha-nav top-bar-menu">
              <li id="menu-item-864" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-864"><a className="akasha-menu-item-title" title="Store Direction" href="#"><span className="icon flaticon-localization" />Store
              Direction</a></li>
              <li id="menu-item-865" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-865"><a className="akasha-menu-item-title" title="Order Tracking" href="#"><span className="icon flaticon-box" />Order
              Tracking</a></li>
            </ul>
            <div className="akasha-nav top-bar-menu right">
              <ul className="wpml-menu">
                <li className="menu-item akasha-dropdown block-language">
                  <a href="#" data-akasha="akasha-dropdown">
                    <img src="FE/assets/images/en.png" alt="en" width={18} height={12} />
                English
              </a>
                  <span className="toggle-submenu" />
                  <ul className="sub-menu">
                    <li className="menu-item">
                      <a href="#">
                        <img src="FE/assets/images/it.png" alt="it" width={18} height={12} />
                    Italiano
                  </a>
                    </li>
                  </ul>
                </li>
                <li className="menu-item">
                  <div className="wcml-dropdown product wcml_currency_switcher">
                    <ul>
                      <li className="wcml-cs-active-currency">
                        <a className="wcml-cs-item-toggle">USD</a>
                        <ul className="wcml-cs-submenu">
                          <li>
                            <a>EUR</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="header-middle">
        <div className="container">
          <div className="header-middle-inner">
            <div className="header-logo-menu">
              <div className="block-menu-bar">
                <a className="menu-bar menu-toggle" href="#">
                  <span />
                  <span />
                  <span />
                </a>
              </div>
              <div className="header-logo">
                <a href="index-2.html"><img alt="Akasha" src="FE/assets/images/logo.png" className="logo" /></a></div>
            </div>
            <div className="header-search-mid">
              <div className="header-search">
                <div className="block-search">
                  <form role="search" method="get" className="form-search block-search-form akasha-live-search-form">
                    <div className="form-content search-box results-search">
                      <div className="inner">
                        <input autoComplete="off"
                          className="searchfield txt-livesearch input"
                          name="s"
                          placeholder="Search here..."
                          type="text"
                        />
                      </div>
                    </div>
                    <input name="post_type" defaultValue="product" type="hidden" />
                    <input name="taxonomy" defaultValue="product_cat" type="hidden" />
                    <button type="submit" className="btn-submit">
                      <span className="flaticon-magnifying-glass-1" />
                    </button>
                  </form>{/* block search */}
                </div>
              </div>
            </div>
            <div className="header-control">
              <div className="header-control-inner">
                <div className="meta-dreaming">
                  <div className="menu-item block-user block-dreaming akasha-dropdown">
                    <a className="block-link" href="my-account.html">
                      <span className="flaticon-profile" />
                    </a>
                    <ul className="sub-menu">
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--dashboard is-active">
                        <a href="#">Dashboard</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--orders">
                        <a href="#">Orders</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--downloads">
                        <a href="#">Downloads</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-adchair">
                        <a href="#">Addresses</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-account">
                        <a href="#">Account details</a>
                      </li>
                      <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--customer-logout">
                        <a href="#">Logout</a>
                      </li>
                    </ul>
                  </div>
                  <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                    <div className="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                      <a className="block-link link-dropdown" href="cart.html">
                        <span className="flaticon-bag" />
                        <span className="count">3</span>
                      </a>
                    </div>
                    <div className="widget akasha widget_shopping_cart">
                      <div className="widget_shopping_cart_content">
                        <h3 className="minicart-title">Your Cart<span className="minicart-number-items">3</span></h3>
                        <ul className="akasha-mini-cart cart_list product_list_widget">
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">×</a>
                            <a href="#">
                              <img src="FE/assets/images/apro134-1-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />T-shirt with skirt – Pink&nbsp;
                        </a>
                            <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>150.00</span></span>
                          </li>
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">×</a>
                            <a href="#">
                              <img src="FE/assets/images/apro1113-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />Abstract Sweatshirt&nbsp;
                        </a>
                            <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>129.00</span></span>
                          </li>
                          <li className="akasha-mini-cart-item mini_cart_item">
                            <a href="#" className="remove remove_from_cart_button">×</a>
                            <a href="#">
                              <img src="FE/assets/images/apro201-1-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />Mini Dress&nbsp;
                        </a>
                            <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>139.00</span></span>
                          </li>
                        </ul>
                        <p className="akasha-mini-cart__total total"><strong>Subtotal:</strong>
                          <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>418.00</span>
                        </p>
                        <p className="akasha-mini-cart__buttons buttons">
                          <a href="cart.html" className="button akasha-forward">Viewcart</a>
                          <a href="checkout.html" className="button checkout akasha-forward">Checkout</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-wrap-stick">
        <div className="header-position">
          <div className="header-nav">
            <div className="container">
              <div className="akasha-menu-wapper" />
              <div className="header-nav-inner">
                <div className="box-header-nav menu-nocenter">
                  <ul id="menu-primary-menu" className="clone-main-menu akasha-clone-mobile-menu akasha-nav main-menu">
                    <li id="menu-item-230" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-230 parent parent-megamenu item-megamenu menu-item-has-children">
                      <Link className="akasha-menu-item-title" title="Home" to="/">Home</Link>
                      <span className="toggle-submenu" />
                    </li>
                    <li id="menu-item-228" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-228 parent parent-megamenu item-megamenu menu-item-has-children">
                      <Link className="akasha-menu-item-title" title="Shop" to="/product">All</Link>
                      <span className="toggle-submenu" />
                    </li>
                    <li id="menu-item-229" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-229 parent parent-megamenu item-megamenu menu-item-has-children">
                      <Link className="akasha-menu-item-title" title="Elements" to="/about">About</Link>
                      <span className="toggle-submenu" />
                    </li>
                    <li id="menu-item-996" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-996 parent parent-megamenu item-megamenu menu-item-has-children">
                      <Link className="akasha-menu-item-title" title="Blog" to="/contact">Contact</Link>
                      <span className="toggle-submenu" />
                    </li>
                    {
                      category.map((category, index) => {
                        return (

                          <li key={index} id="menu-item-996" className="menu-item menu-item-type-post_type menu-item-object-megamenu menu-item-996 parent parent-megamenu item-megamenu menu-item-has-children">
                            <Link className="akasha-menu-item-title" title="Blog" to={ `/category/${category.id}/products` }>{category.name}</Link>
                            <span className="toggle-submenu" />
                          </li>
                        )
                      })
                    }

                    <li id="menu-item-237" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-237 parent">
                      <a className="akasha-menu-item-title" title="Pages" href="#">Pages</a>
                      <span className="toggle-submenu" />
                      <ul role="menu" className="submenu">
                        <li id="menu-item-987" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-987">
                          <Link className="akasha-menu-item-title" title="About" to={`/admin/list-category`}>Category</Link></li>
                        <li id="menu-item-988" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-988">
                          <Link className="akasha-menu-item-title" title="Contact" to={`/admin/list-product`} >Product</Link></li>
                        <li id="menu-item-990" className="menu-item menu-item-type-custom menu-item-object-custom menu-item-990">
                          <a className="akasha-menu-item-title" title="Page 404" href="404.html">Page 404</a></li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-mobile">
        <div className="header-mobile-left">
          <div className="block-menu-bar">
            <a className="menu-bar menu-toggle" href="#">
              <span />
              <span />
              <span />
            </a>
          </div>
          <div className="header-search akasha-dropdown">
            <div className="header-search-inner" data-akasha="akasha-dropdown">
              <a href="#" className="link-dropdown block-link">
                <span className="flaticon-magnifying-glass-1" />
              </a>
            </div>
            <div className="block-search">
              <form role="search" method="get" className="form-search block-search-form akasha-live-search-form">
                <div className="form-content search-box results-search">
                  <div className="inner">
                    <input autoComplete="off" className="searchfield txt-livesearch input" name="s" defaultValue placeholder="Search here..." type="text" />
                  </div>
                </div>
                <input name="post_type" defaultValue="product" type="hidden" />
                <input name="taxonomy" defaultValue="product_cat" type="hidden" />
                <div className="category">
                  <select title="product_cat" name="product_cat" id={1770352541} className="category-search-option" tabIndex={-1} style={{ display: 'none' }}>
                    <option value={0}>All Categories</option>
                    <option className="level-0" value="light">Shoes</option>
                    <option className="level-0" value="chair">Accessories</option>
                    <option className="level-0" value="table">Bags</option>
                    <option className="level-0" value="bed">Life style</option>
                    <option className="level-0" value="new-arrivals">New arrivals</option>
                    <option className="level-0" value="lamp">Summer Sale</option>
                    <option className="level-0" value="specials">Specials</option>
                    <option className="level-0" value="sofas">Women</option>
                  </select>
                </div>
                <button type="submit" className="btn-submit">
                  <span className="flaticon-magnifying-glass-1" />
                </button>
              </form>{/* block search */}
            </div>
          </div>
          <ul className="wpml-menu">
            <li className="menu-item akasha-dropdown block-language">
              <a href="#" data-akasha="akasha-dropdown">
                <img src="FE/assets/images/en.png" alt="en" width={18} height={12} />
            English
          </a>
              <span className="toggle-submenu" />
              <ul className="sub-menu">
                <li className="menu-item">
                  <a href="#">
                    <img src="FE/assets/images/it.png" alt="it" width={18} height={12} />
                Italiano
              </a>
                </li>
              </ul>
            </li>
            <li className="menu-item">
              <div className="wcml-dropdown product wcml_currency_switcher">
                <ul>
                  <li className="wcml-cs-active-currency">
                    <a className="wcml-cs-item-toggle">USD</a>
                    <ul className="wcml-cs-submenu">
                      <li>
                        <a>EUR</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
        <div className="header-mobile-mid">
          <div className="header-logo">
            <a href="index-2.html"><img alt="Akasha" src="FE/assets/images/logo.png" className="logo" /></a></div>
        </div>
        <div className="header-mobile-right">
          <div className="header-control-inner">
            <div className="meta-dreaming">
              <div className="menu-item block-user block-dreaming akasha-dropdown">
                <a className="block-link" href="my-account.html">
                  <span className="flaticon-profile" />
                </a>
                <ul className="sub-menu">
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--dashboard is-active">
                    <a href="#">Dashboard</a>
                  </li>
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--orders">
                    <a href="#">Orders</a>
                  </li>
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--downloads">
                    <a href="#">Downloads</a>
                  </li>
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-adchair">
                    <a href="#">Addresses</a>
                  </li>
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--edit-account">
                    <a href="#">Account details</a>
                  </li>
                  <li className="menu-item akasha-MyAccount-navigation-link akasha-MyAccount-navigation-link--customer-logout">
                    <a href="#">Logout</a>
                  </li>
                </ul>
              </div>
              <div className="block-minicart block-dreaming akasha-mini-cart akasha-dropdown">
                <div className="shopcart-dropdown block-cart-link" data-akasha="akasha-dropdown">
                  <a className="block-link link-dropdown" href="cart.html">
                    <span className="flaticon-bag" />
                    <span className="count">3</span>
                  </a>
                </div>
                <div className="widget akasha widget_shopping_cart">
                  <div className="widget_shopping_cart_content">
                    <h3 className="minicart-title">Your Cart<span className="minicart-number-items">3</span></h3>
                    <ul className="akasha-mini-cart cart_list product_list_widget">
                      <li className="akasha-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button">×</a>
                        <a href="#">
                          <img src="FE/assets/images/apro134-1-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />T-shirt with skirt – Pink&nbsp;
                    </a>
                        <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>150.00</span></span>
                      </li>
                      <li className="akasha-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button">×</a>
                        <a href="#">
                          <img src="FE/assets/images/apro1113-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />Abstract Sweatshirt&nbsp;
                    </a>
                        <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>129.00</span></span>
                      </li>
                      <li className="akasha-mini-cart-item mini_cart_item">
                        <a href="#" className="remove remove_from_cart_button">×</a>
                        <a href="#">
                          <img src="FE/assets/images/apro201-1-600x778.jpg" className="attachment-akasha_thumbnail size-akasha_thumbnail" alt="img" width={600} height={778} />Mini Dress&nbsp;
                    </a>
                        <span className="quantity">1 × <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>139.00</span></span>
                      </li>
                    </ul>
                    <p className="akasha-mini-cart__total total"><strong>Subtotal:</strong>
                      <span className="akasha-Price-amount amount"><span className="akasha-Price-currencySymbol">$</span>418.00</span>
                    </p>
                    <p className="akasha-mini-cart__buttons buttons">
                      <a href="cart.html" className="button akasha-forward">Viewcart</a>
                      <a href="checkout.html" className="button checkout akasha-forward">Checkout</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

  )
}

export default HeaderHomepage
