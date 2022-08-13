import React, { useCallback, useContext, useEffect } from 'react';
import {UNSAFE_NavigationContext} from 'react-router-dom';

export function useBlocker(blocker, when=true) {
    const {navigator} = useContext(UNSAFE_NavigationContext);

    useEffect(() => {
        if(!when) {
            return;
        }

        const unblock = navigator.block((tx) => {
            const autoUnblock = {
                ...tx,
                retry() {
                    unblock();
                    tx.retry();
                }
            };
            blocker(autoUnblock);
        });
        return unblock;
    }, [navigator, blocker, when]);
};

export function usePrompt(message, when=true) {
    const blocker = useCallback((tx) => {
        if(window.confirm(message)) {
            tx.retry();
        }
    }, [message]);

    useBlocker(blocker, when);
};