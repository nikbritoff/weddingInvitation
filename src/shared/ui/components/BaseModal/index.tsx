import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";

import { type ModalProps } from "./modal.types.ts";

export const BaseModal = ({
  title,
  shouldUseOverlay,
  footer,
  children,
  contentProps,
  closeOnOverlayClick: shouldCloseOnOverlayClick = true,
  ...pathThroughModalProps
}: ModalProps) => (
  <Modal
    closeOnOverlayClick={shouldCloseOnOverlayClick}
    {...pathThroughModalProps}
  >
    {shouldUseOverlay && <ModalOverlay />}
    <ModalContent
      display="flex"
      flexDirection="column"
      alignItems="center"
      p="90px"
      gap="30px"
      {...contentProps}
    >
      {title && (
        <ModalHeader p="0" noOfLines={1}>
          {title}
        </ModalHeader>
      )}
      <ModalBody p={0} width="100%">
        {children}
      </ModalBody>
      {footer && (
        <ModalFooter
          width="100%"
          display="flex"
          justifyContent={
            contentProps?.justifyContent
              ? contentProps.justifyContent
              : "space-between"
          }
        >
          {footer}
        </ModalFooter>
      )}
    </ModalContent>
  </Modal>
);
