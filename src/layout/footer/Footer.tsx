import { Col, Row } from "antd";
import { Container } from "components";
import React from "react";

import logo from "assets/images/liwoul-hamd-logo.png";

type Props = {};

export const FooterNav = (props: Props) => {
    return (
        <div style={{ background: "#f7fafc", padding: "4rem 0" }}>
            <Container>
                <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                    <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 6 }}
                    >
                        <div className="logo">
                            <img
                                src={logo}
                                style={{ maxWidth: "50px" }}
                                alt=""
                            />
                        </div>
                        <p style={{ margin: "0.5rem 0 2rem 0" }}>
                            Au service de Baye Niass pour sauver la jeunesse.
                        </p>
                        <SocialLinks />
                    </Col>
                    <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 4 }}
                    >
                        <div className="chakra-stack css-gsc7pt">
                            <h4
                                style={{ fontSize: "1.25rem", fontWeight: 700 }}
                            >
                                Islam
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingLeft: 0,
                                }}
                            >
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Naissance
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        les piliers
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Les Lieux Saints
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Enseignements
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 4 }}
                    >
                        <div className="chakra-stack css-gsc7pt">
                            <h4
                                style={{ fontSize: "1.25rem", fontWeight: 700 }}
                            >
                                Fayda Tijania
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingLeft: 0,
                                }}
                            >
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Chronologie
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Po??mes de Baye
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Lettres de Baye
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Agenda
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 4 }}
                    >
                        <div className="chakra-stack css-gsc7pt">
                            <h4
                                style={{ fontSize: "1.25rem", fontWeight: 700 }}
                            >
                                LiwaoulHamd
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingLeft: 0,
                                }}
                            >
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Nos activit??s
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Newsletter
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Calendrier
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        FAQ
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>

                    <Col
                        className="gutter-row"
                        xs={{ span: 24 }}
                        md={{ span: 24 }}
                        lg={{ span: 4 }}
                    >
                        <div className="chakra-stack css-gsc7pt">
                            <h4
                                style={{ fontSize: "1.25rem", fontWeight: 700 }}
                            >
                                Legales
                            </h4>
                            <ul
                                style={{
                                    listStyle: "none",
                                    paddingLeft: 0,
                                }}
                            >
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Mentions l??gales
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Politique cookies
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Nous suivre
                                    </a>
                                </li>
                                <li className="footer-link">
                                    <a
                                        className="chakra-link css-7h3el"
                                        href="/#"
                                    >
                                        Publications
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const SocialLinks = () => (
    <div
        style={{
            width: "100px",
            display: "flex",
            justifyContent: "space-between",
        }}
    >
        <a
            className="chakra-button css-1eaf27m"
            aria-label="social network"
            href="https://twitter.com/taftaf-express"
            target="_blank"
            rel="noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-facebook"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#2D3748"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3"></path>
            </svg>
        </a>
        <a
            className="chakra-button css-1eaf27m"
            aria-label="social network"
            href="https://twitter.com/taftaf-express"
            target="_blank"
            rel="noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-instagram"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#2D3748"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <rect x="4" y="4" width="16" height="16" rx="4"></rect>
                <circle cx="12" cy="12" r="3"></circle>
                <line x1="16.5" y1="7.5" x2="16.5" y2="7.501"></line>
            </svg>
        </a>
        <a
            className="chakra-button css-1eaf27m"
            aria-label="social network"
            href="https://twitter.com/taftaf-express"
            target="_blank"
            rel="noreferrer"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-whatsapp"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="#2D3748"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
                focusable="false"
            >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9"></path>
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1"></path>
            </svg>
        </a>
    </div>
);
