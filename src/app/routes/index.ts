import express from "express";
import { AuthRoutes } from "../modules/Auth/auth.route";
import { UserDataRoutes } from "../modules/User/user.route";
import { AddressRoutes } from "../modules/Address/address.route";
import { CustomerRoutes } from "../modules/Customar/customar.route";
import { ParcelRoutes } from "../modules/Parcel/parcel.route";
import { PaymentMethodRoute } from "../modules/PaymentMethod/paymentMethod.route";
import path from "path";
import { NotificationRoutes } from "../modules/Notification/notification.route";
import { RestrictedUserRoutes } from "../modules/RestrictedUser/restrictedUser.route";
import { SupportRoutes } from "../modules/Support/support.route";
import { CommentRoutes } from "../modules/Comments/comments.route";
import { CarrierRoutes } from "../modules/Carrier/Carrier.route";
import { GetInTouchRoutes } from "../modules/GetInTouch/getInTouch.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/user",
    route: UserDataRoutes,
  },
  {
    path: "/address",
    route: AddressRoutes,
  },
  {
    path: "/customer",
    route: CustomerRoutes,
  },
  {
    path: "/parcel",
    route: ParcelRoutes,
  },
  {
    path: "/payment-method",
    route: PaymentMethodRoute,
  },
  {
    path: "/notifications",
    route: NotificationRoutes,
  },
  {
    path: "/restricted-user",
    route: RestrictedUserRoutes,
  },
  {
    path: "/support",
    route: SupportRoutes,
  },
  {
    path: "/comments",
    route: CommentRoutes,
  },
  {
    path: "/carrier",
    route: CarrierRoutes,
  },
  {
    path: "/get-in-touch",
    route: GetInTouchRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
