"use client";

import { useEffect, useState } from "react";
import { Menu, MenuProps } from "antd";
import * as Icons from "@ant-design/icons";
import { useRouter } from "next/navigation";
import flat2tree from "@/utils/flat2tree";

const getIcon = (iconName: string) => {
    const CustomIcon = (Icons as any)[iconName];
    return <CustomIcon />;
};

interface LevelKeysProps {
    key?: string;
    children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
    const key: Record<string, number> = {};
    const func = (items2: LevelKeysProps[], level = 1) => {
        items2.forEach((item) => {
            if (item.key) {
                key[item.key] = level;
            }
            if (item.children) {
                func(item.children, level + 1);
            }
        });
    };
    func(items1);
    return key;
};

// const levelKeys = getLevelKeys(items as LevelKeysProps[]);

interface IProps {
    menus: any[];
    collapsed?: boolean;
}

const Menus = ({ menus, collapsed }: IProps) => {
    const router = useRouter();
    const [stateOpenKeys, setStateOpenKeys] = useState<string[]>([]);
    const [levelKeys, setLevelKeys] = useState<Record<string, number>>({});
    const [items, setItems] = useState<any[]>([]);

    useEffect(() => {
        if (menus && menus.length > 0) {
            const items = flat2tree(menus, {
                parentKeyColumnName: "parentId",
                keyColumnName: "id",
                titleColumnName: "title",
            });
            const _items = packagingItem(items);
            const _levelKeys = getLevelKeys(_items as LevelKeysProps[]);
            setItems(_items);
            setLevelKeys(_levelKeys);
        }
    }, [menus]);

    const packagingItem = (items: any[]) => {
        return items.map((item) => {
            const _item: any = {
                key: item.key,
                label: item.label,
                path: item.path,
            };
            if (item.icon) {
                _item.icon = getIcon(item.icon);
            }
            if (item.children && item.children.length > 0) {
                _item.children = packagingItem(item.children);
            }
            return _item;
        });
    };

    const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
        const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
        // open
        if (currentOpenKey !== undefined) {
            const repeatIndex = openKeys
                .filter((key) => key !== currentOpenKey)
                .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

            setStateOpenKeys(
                openKeys
                    // remove repeat key
                    .filter((_, index) => index !== repeatIndex)
                    // remove current level all child
                    .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
            );
        } else {
            // close
            setStateOpenKeys(openKeys);
        }
    };

    const onClick = (e: any) => {
        const path = e?.item?.props?.path;
        if (path) {
            router.push(path);
        }
    };

    return (
        <>
            <Menu
                mode="inline"
                openKeys={stateOpenKeys}
                onOpenChange={onOpenChange}
                onClick={onClick}
                items={items}
                inlineCollapsed={collapsed}
                className="h-full overflow-y-hidden hover:overflow-y-auto"
            />
        </>
    );
};

export default Menus;
