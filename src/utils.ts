import {FeedId} from 'ssb-typescript';
const {isAddress} = require('ssb-ref');

export const SEED = 'SSB+Room+PSK3TLYC2T86EHQCUHBUHASCASE18JBV24=';

export function isOpenRoomInvite(invite: any) {
  if (typeof invite !== 'string') return false;
  if (!invite) return false;
  if (!invite.endsWith(':' + SEED)) return false;
  const [addr] = invite.split(':' + SEED);
  if (!addr) return false;
  if (!isAddress(addr)) return false;
  return true;
}

export function addressToOpenRoomInvite(addr: any) {
  return typeof addr === 'string' ? `${addr}:${SEED}` : null;
}

export function openRoomInviteToAddress(invite: any) {
  return isOpenRoomInvite(invite) ? invite.split(':' + SEED)[0] : null;
}

export function toTunnelAddress(portal: FeedId, target: FeedId): string {
  const shs = target.slice(1, -8);
  return `tunnel:${portal}:${target}~shs:${shs}`;
}
