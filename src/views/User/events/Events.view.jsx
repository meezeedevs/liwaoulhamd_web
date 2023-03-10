import { Container, useTitle } from "components";
import React, { useEffect, useState, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import styled from "styled-components";
import { Spin, Popover } from "antd";
import {
    EnvironmentOutlined,
    FileTextOutlined,
    UserOutlined,
    CalendarOutlined,
} from "@ant-design/icons";
import moment from "moment";
import { useStoreActions, useStoreState } from "hooks";

import { Events } from "../home/components";
// import { lang } from "config";

import { useLocation } from "react-router-dom";

import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export const PublicEventsView = (props) => {
    const [appEvents, setAppEvents] = useState([]);
    const [DateToRender, setDateToRender] = useState(null);
    // const [currentDate, setCurrentDate] = useState(new Date());

    const { loading, events } = useStoreState((state) => state.events);
    const { getEvents } = useStoreActions((actions) => actions.events);

    useEffect(() => {
        getEvents();
    }, [getEvents]);

    const search = useLocation().search;
    const goto = new URLSearchParams(search).get("goto");

    useEffect(() => {
        if (goto) {
            setDateToRender(goto);
            window.scrollTo({
                top: 150,
                behavior: "smooth",
            });
        }
    }, [goto]);

    useEffect(() => {
        if (events);
        console.log(events, "klj");
        let datas = [];
        if (events.data)
            events?.data?.map((ev) => {
                const data = {
                    title: ev.title,
                    start: moment(ev.dueDate).toDate(),
                    end: moment(ev.dueDate).toDate(),
                    allDay: false,
                    resource: {
                        location: ev.location,
                        description: ev.description,
                        organiser: `${ev.organiser.firstName} ${ev.organiser.lastName}`,
                    },
                };
                return datas.push(data);
            });
        else
            events?.map((ev) => {
                const data = {
                    title: ev.title,
                    start: moment(ev.dueDate).toDate(),
                    end: moment(ev.dueDate).toDate(),
                    allDay: false,
                    resource: {
                        location: ev.location,
                        description: ev.description,
                        organiser: `${ev.organiser.firstName} ${ev.organiser.lastName}`,
                    },
                };
                return datas.push(data);
            });
        console.log(datas, "lkj");
        return setAppEvents(datas);
    }, [events]);

    const [culture] = useState("fr");

    const { defaultDate, messages } = useMemo(
        () => ({
            defaultDate: new Date(),
        }),
        []
    );

    useTitle("??v??nements");

    const EventComponent = (ev) => {
        // var dateWithouthSecond = new Date(ev.event.start);
        // // const time = dateWithouthSecond.toLocaleTimeString(navigator.language, {
        // //     hour: "2-digit",
        // //     minute: "2-digit",
        // // });
        return (
            <Popover
                content={() => content(ev)}
                title={<></>}
                trigger="click"
                placement="leftTop"
                autoAdjustOverflow
                overlayStyle={{ zIndex: 999 }}
            >
                <div
                    className="task"
                    style={{ display: "flex", justifyContent: "space-between" }}
                >
                    <span style={{ color: "white" }}>
                        <span style={{ fontWeight: 600 }}>{ev.title}</span>
                    </span>
                </div>
            </Popover>
        );
    };

    const content = (ev) => (
        <StyledPopover>
            <StyledPopoverEvent>
                <div className="timed-event">
                    <div
                        style={{
                            display: "flex",
                        }}
                    >
                        <div style={{ width: "15%", marginTop: "" }}>
                            <StyledPopoverEventColor
                                style={{
                                    background: "#00ba72",
                                }}
                            ></StyledPopoverEventColor>
                        </div>
                        <div style={{ width: "85%" }}>
                            <div style={{ color: "#00ba72" }}>Titre</div>
                            <h3 className="timed-event_event">{ev.title}</h3>
                        </div>
                    </div>
                    <div
                        style={{
                            display: "flex",
                        }}
                        className="popover-event_description"
                    >
                        <div style={{ width: "15%", marginTop: "" }}>
                            <CalendarOutlined />
                        </div>
                        <div style={{ width: "85%" }}>
                            <div className="label">Date et heure</div>
                            <div className="timed-event_time">
                                <span>
                                    {moment(ev.event.start).format(
                                        "dddd MMM Do YY"
                                    )}
                                </span>
                                <span className="timed-event_time-separator">
                                    .
                                </span>
                                <span className="timed-event_time-range">
                                    {moment(ev.event.start).format("LT")}
                                    {/* -{" "}
                            {moment(ev.event.end).format("LT")} */}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </StyledPopoverEvent>
            <div
                style={{
                    display: "flex",
                }}
                className="popover-event_description"
            >
                <div style={{ width: "15%", marginTop: "" }}>
                    <FileTextOutlined />
                </div>
                <div style={{ width: "85%" }}>
                    <div className="label">Description</div>
                    <h4>
                        {ev.event.resource.description &&
                        ev.event.resource.description !== ""
                            ? ev.event.resource.description
                            : " - "}
                    </h4>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                }}
                className="popover-event_description"
            >
                <div style={{ width: "15%", marginTop: "" }}>
                    <EnvironmentOutlined />
                </div>
                <div style={{ width: "85%" }}>
                    <div className="label">Adresse</div>
                    <h4>
                        {ev.event.resource.location &&
                        ev.event.resource.location !== ""
                            ? ev.event.resource.location
                            : " - "}
                    </h4>
                </div>
            </div>
            <div
                style={{
                    display: "flex",
                }}
                className="popover-event_description"
            >
                <div style={{ width: "15%", marginTop: "" }}>
                    <UserOutlined />
                </div>
                <div style={{ width: "85%" }}>
                    <div className="label">Organisateur</div>
                    <h4>
                        {ev.event.resource.organiser &&
                        ev.event.resource.organiser !== ""
                            ? ev.event.resource.organiser
                            : " - "}
                    </h4>
                </div>
            </div>
        </StyledPopover>
    );
    // console.log(DateToRender);
    return (
        <div>
            <Container>
                <div
                    style={{
                        marginTop: "4rem",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                    }}
                >
                    <h1 style={{ marginBottom: 0 }} className="heading-2">
                        ??v??nements
                    </h1>
                </div>
                <div>
                    <Spin spinning={loading} tip="Chargement...">
                        <Calendar
                            localizer={localizer}
                            events={appEvents}
                            startAccessor="start"
                            endAccessor="end"
                            style={{ height: "80vh" }}
                            culture={culture}
                            date={
                                DateToRender && DateToRender !== null
                                    ? DateToRender
                                    : null
                            }
                            defaultDate={defaultDate}
                            messages={messages}
                            components={{
                                event: EventComponent,
                            }}
                            onNavigate={(date) => {
                                // setCurrentDate(date);
                                setDateToRender(date);
                                // search_params.delete("goto");
                            }}
                        />
                    </Spin>
                </div>

                <Events />
            </Container>
        </div>
    );
};

const StyledPopover = styled.div`
    max-width: 350px;
    width: 350px;
    z-index: 999 !important;

    .ant-popover-arrow {
        background: transparent !important;
        border-bottom-color: transparent !important;
        border-color: transparent !important;
    }
    .popover-event_description {
        margin-top: 20px;
        &:not(:last-child) {
            margin-bottom: 20px;
        }
        color: #333;
        .label {
            font-size: 15px;
            color: #00ba72;
        }
        .anticon {
            font-size: 18px;
            margin-left: 8px;
            margin-top: 8px;
            color: #00ba72;
        }
        h3 {
            color: #333;
        }
    }
`;

const StyledPopoverEventColor = styled.div`
    border-radius: 4px;
    height: 15px;
    width: 15px;
    margin-left: 8px;
    margin-top: 8px;
`;

const StyledPopoverEvent = styled.div`
    display: flex;
    width: 100%;

    .timed-event {
        width: 100%;
        &_event {
            font-family: "Google Sans", Roboto, Arial, sans-serif;
            font-size: 20px;
            font-weight: 600;
            line-height: 28px;
            color: #333;
            max-height: 56px;
            overflow-wrap: break-word;
            word-wrap: break-word;
            overflow: hidden;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            line-height: 28px;
        }
    }
    .timed-event_time {
        font-size: 16px;
        color: #3b3b3b;
        font-weight: 500;
        &-range {
            font-weight: 600;
            color: #00ba72;
        }
    }
    .timed-event_time-separator {
        font-family: Roboto, Arial, sans-serif;
        font-size: 14px;
        font-weight: 400;
        letter-spacing: 0.2px;
        line-height: 20px;
        color: #333;

        margin: 0 8px;
        font-weight: 700;
    }
`;
