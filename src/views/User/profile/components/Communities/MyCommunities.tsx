import React, { useEffect, useState } from "react";
import { Alert, Button, Space, Table, Tooltip } from "antd";
import { ColumnsType } from "antd/es/table";
import { LogoutOutlined } from "@ant-design/icons";
import { useStoreActions, useStoreState } from "hooks";
import { storage } from "utils";

// type Props = {
// };

interface DataType {
    _id?: string;
    community: any;
}

export const MyCommunities = () => {
    const [appCommunities, setAppCommunities] = useState([] as DataType[]);

    const { loading, myCommunities } = useStoreState(
        (state) => state.communities
    );
    const { getMyCommunities, quitCommunity } = useStoreActions(
        (actions) => actions.communities
    );

    useEffect(() => {
        const user = storage.get("currentUser");
        if (user && user.id) getMyCommunities(user.id);
    }, [getMyCommunities]);

    useEffect(() => {
        if (myCommunities) {
            const datas: any = [];
            myCommunities?.map((com) => {
                const data = {
                    key: com._id,
                    ...com,
                };
                return datas.push(data);
            });
            setAppCommunities(datas);
        }
        return;
    }, [myCommunities]);

    const columns: ColumnsType<DataType> = [
        {
            title: "Nom de la communaute",
            dataIndex: "name",
            key: "name",
            render: (text, record) => <span>{record?.community?.name}</span>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, record) => (
                <Space size="middle">
                    <Tooltip title="Quiter la communaute.">
                        <Button
                            className="delete"
                            type="default"
                            onClick={() => {
                                const user = storage.get("currentUser");
                                quitCommunity({
                                    id: record?._id,
                                    user: user?.id,
                                } as any);
                            }}
                        >
                            <LogoutOutlined /> Quitter
                        </Button>
                    </Tooltip>
                </Space>
            ),
        },
    ];

    return (
        <>
            {appCommunities && appCommunities.length <= 0 ? (
                <Alert
                    message="Message"
                    description={
                        <span>
                            Vous etes actuellement dans aucune communautes. Pour
                            Joindre une communaute, Veuillez en faire la demande
                            en passant par l'onglet{" "}
                            <b>
                                <i>'Les communautes'</i>
                            </b>
                        </span>
                    }
                    type="info"
                    showIcon
                    closable
                />
            ) : null}
            <Table
                columns={columns}
                dataSource={appCommunities}
                loading={loading}
            />
        </>
    );
};
