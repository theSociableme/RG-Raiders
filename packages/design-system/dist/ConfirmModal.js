import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, } from '@chakra-ui/react';
import React, { useRef } from 'react';
import { MetaButton } from './MetaButton';
export const ConfirmModal = ({ isOpen, onNope, onYep, header, body, loading, loadingText, }) => {
    const cancelRef = useRef(null);
    return (React.createElement(AlertDialog, { isOpen: isOpen, leastDestructiveRef: cancelRef, onClose: onNope },
        React.createElement(AlertDialogOverlay, null,
            React.createElement(AlertDialogContent, null,
                React.createElement(AlertDialogHeader, { fontSize: "lg", fontWeight: "bold" }, header || ' Are you sure ?'),
                body && React.createElement(AlertDialogBody, null, body),
                React.createElement(AlertDialogFooter, null,
                    React.createElement(MetaButton, { ref: cancelRef, onClick: onNope, isDisabled: loading }, "Nope"),
                    React.createElement(MetaButton, { colorScheme: "red", onClick: onYep, isLoading: loading, loadingText: loadingText, ml: 3 }, "Yep"))))));
};
//# sourceMappingURL=ConfirmModal.js.map