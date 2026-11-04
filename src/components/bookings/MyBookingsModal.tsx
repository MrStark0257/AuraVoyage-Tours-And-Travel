import React, { useState } from 'react';
import { useTravel } from '../../context/TravelContext';
import { formatPrice, formatDate } from '../../utils/formatters';
import {
  X,
  TicketCheck,
  Calendar,
  MapPin,
  Clock,
  Printer,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

export const MyBookingsModal: React.FC = () => {
  const { isMyBookingsOpen, setIsMyBookingsOpen, bookings, currency } = useTravel();
  const [expandedId, setExpandedId] = useState<string | null>(
    bookings.length > 0 ? bookings[0].bookingId : null
  );

  if (!isMyBookingsOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col border border-slate-200">
        {/* Header */}
        <div className="p-4 border-b border-slate-200 flex items-center justify-between bg-slate-50">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-slate-900 text-white flex items-center justify-center">
              <TicketCheck className="w-3.5 h-3.5" />
            </div>
            <div>
              <h3 className="font-semibold text-slate-900 text-xs sm:text-sm">My Bookings & Vouchers</h3>
              <span className="text-[10px] text-slate-500">
                {bookings.length} Reservation{bookings.length !== 1 ? 's' : ''}
              </span>
            </div>
          </div>

          <button
            onClick={() => setIsMyBookingsOpen(false)}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors"
            aria-label="Close"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Bookings List */}
        <div className="p-4 sm:p-5 overflow-y-auto flex-1 space-y-3">
          {bookings.length > 0 ? (
            bookings.map((booking) => {
              const isExpanded = expandedId === booking.bookingId;
              return (
                <div
                  key={booking.bookingId}
                  className="rounded-xl border border-slate-200 bg-white overflow-hidden"
                >
                  {/* Summary Bar */}
                  <div
                    onClick={() =>
                      setExpandedId(isExpanded ? null : booking.bookingId)
                    }
                    className="p-3.5 bg-slate-50/70 hover:bg-slate-100/70 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-200 text-slate-700 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 text-xs">
                            #{booking.bookingId}
                          </span>
                          <span className="bg-slate-200 text-slate-700 text-[9px] font-semibold px-1.5 py-0.2 rounded">
                            {booking.paymentStatus}
                          </span>
                        </div>
                        <span className="text-[10px] text-slate-500">
                          {booking.customerName} • {formatDate(booking.createdAt)}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end gap-3 border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-200">
                      <div className="text-left sm:text-right">
                        <span className="text-[10px] uppercase font-medium text-slate-400 block">
                          Total
                        </span>
                        <span className="text-sm font-bold text-slate-900">
                          {formatPrice(booking.totalUSD, currency)}
                        </span>
                      </div>
                      {isExpanded ? (
                        <ChevronUp className="w-4 h-4 text-slate-400" />
                      ) : (
                        <ChevronDown className="w-4 h-4 text-slate-400" />
                      )}
                    </div>
                  </div>

                  {/* Expanded Voucher Details */}
                  {isExpanded && (
                    <div className="p-4 border-t border-slate-200 bg-white space-y-3">
                      {/* Customer info */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs bg-slate-50 p-2.5 rounded-lg border border-slate-100 text-slate-600">
                        <div>
                          <strong className="block text-slate-700 text-[10px]">Traveler</strong>
                          <span>{booking.customerName}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-700 text-[10px]">Email</strong>
                          <span>{booking.customerEmail}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-700 text-[10px]">Payment</strong>
                          <span>{booking.paymentMethod}</span>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="space-y-2">
                        <span className="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block">
                          Voucher Elements ({booking.items.length})
                        </span>

                        {booking.items.map((item, idx) => (
                          <div
                            key={idx}
                            className="flex items-start justify-between gap-2.5 p-2.5 rounded-lg border border-slate-100 bg-slate-50/50"
                          >
                            <div className="flex items-center gap-2.5">
                              <img
                                src={item.image}
                                alt={item.title}
                                className="w-10 h-10 rounded-md object-cover shrink-0"
                              />
                              <div>
                                <span className="text-[9px] uppercase font-semibold text-slate-500 block">
                                  {item.itemType.replace('_', ' ')}
                                </span>
                                <h5 className="font-semibold text-xs text-slate-900">
                                  {item.title}
                                </h5>
                                <div className="flex flex-wrap gap-2 text-[10px] text-slate-500 mt-0.5">
                                  <span className="flex items-center gap-0.5">
                                    <MapPin className="w-3 h-3 text-slate-400" />
                                    {item.destination}
                                  </span>
                                  {item.selectedDate && (
                                    <span className="flex items-center gap-0.5">
                                      <Calendar className="w-3 h-3 text-slate-400" />
                                      {item.selectedDate}
                                    </span>
                                  )}
                                  {item.timeSlot && (
                                    <span className="flex items-center gap-0.5">
                                      <Clock className="w-3 h-3 text-slate-400" />
                                      {item.timeSlot}
                                    </span>
                                  )}
                                </div>
                              </div>
                            </div>

                            <span className="font-semibold text-xs text-slate-900 shrink-0">
                              {formatPrice(item.unitPriceUSD * item.quantity, currency)}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-slate-500">
                          <ShieldCheck className="w-3.5 h-3.5 text-slate-500" />
                          <span>Show digital voucher upon check-in</span>
                        </div>
                        <button
                          onClick={() => window.print()}
                          className="px-3 py-1 rounded-md bg-white hover:bg-slate-50 text-slate-700 text-xs font-medium flex items-center gap-1 transition-colors border border-slate-200"
                        >
                          <Printer className="w-3 h-3" />
                          <span>Print Slip</span>
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-16">
              <TicketCheck className="w-8 h-8 text-slate-300 mx-auto mb-2" />
              <h4 className="font-medium text-slate-700 text-xs">No reservations found</h4>
              <p className="text-[11px] text-slate-400 mt-1 max-w-xs mx-auto">
                Confirmed vouchers and booking receipts will appear here after checkout.
              </p>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-3.5 border-t border-slate-200 bg-slate-50 flex justify-end">
          <button
            onClick={() => setIsMyBookingsOpen(false)}
            className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium rounded-lg transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
