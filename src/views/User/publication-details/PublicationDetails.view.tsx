import { useStoreActions, useStoreState } from "hooks";
import { Link, useLocation } from "react-router-dom";

import { LeftOutlined } from "@ant-design/icons";

import { Container, Post } from "components";
import { routes } from "config";
import { Posts, VideoPosts } from "../home/components";
import { useEffect, useState } from "react";
import { Spin } from "antd";

type Props = {};

export const PublicationDetailsView = (props: Props) => {
    const search = useLocation().search;
    const id = new URLSearchParams(search).get("id");

    const [postDetails, setPostDetails] = useState([] as any);

    const { loadingPosts, post } = useStoreState((state) => state.posts);

    const { getPostById, setPost } = useStoreActions(
        (actions) => actions.posts
    );

    useEffect(() => {
        getPostById(id as string);
    }, [getPostById, id]);

    useEffect(() => {
        setPostDetails(post);
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [post]);

    const youtubeIframe = (videoLink: any) => {
        var regex: any = "youtube";
        var link = videoLink;
        if (link.indexOf(regex) > -1)
            return (
                <div className="css-1x060qm" style={{ width: "100%" }}>
                    <iframe
                        width="100%"
                        height="300px"
                        src={postDetails?.video}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        title="Embedded youtube"
                        style={{ borderRadius: "22px" }}
                    />
                </div>
            );
        else return null;
    };

    return (
        <>
            <Container>
                <Spin spinning={loadingPosts} tip="chargement...">
                    <div>
                        <Link
                            to={routes.publications}
                            style={{ color: "#00ba71" }}
                            onClick={() => setPost({} as any)}
                        >
                            <div
                                style={{
                                    display: "flex",
                                    // marginBottom: "2.5rem",
                                    cursor: "pointer",
                                    position: "sticky",
                                    top: "6vh",
                                    background: "#fff",
                                    padding: "3rem 0 3rem 0",
                                    width: "100%",
                                    zIndex: 1,
                                    alignItems: "center",
                                }}
                            >
                                <LeftOutlined />
                                <span style={{ marginLeft: "5px" }}>
                                    Retour
                                </span>
                            </div>
                        </Link>
                        <Post
                            details={postDetails}
                            loading={loadingPosts}
                            youtubeIFrame={youtubeIframe}
                        />
                    </div>
                </Spin>
            </Container>
            <div style={{ background: "#F3F4F6" }}>
                <Container>
                    <Posts />
                    <VideoPosts />
                </Container>
            </div>
        </>
    );
};
