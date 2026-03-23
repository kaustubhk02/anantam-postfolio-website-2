'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, ZoomIn, Camera } from 'lucide-react'

interface GalleryItem {
  id: number
  title: string
  caption: string
  src?: string
}

interface GalleryGridProps {
  items: GalleryItem[]
}

export default function GalleryGrid({ items }: GalleryGridProps) {
  const [selected, setSelected] = useState<GalleryItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelected(item)}
            className="gallery-item group cursor-pointer relative"
          >
            <div className="aspect-video rounded-xl overflow-hidden glass-card gradient-border relative">
              <div className="scan-line opacity-40" />
              {/* Placeholder */}
              <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900 relative">
                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)',
                    backgroundSize: '25px 25px',
                  }}
                />
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/50" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/50" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/50" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/50" />
                <Camera className="w-8 h-8 text-cyan-400/40 relative z-10" />
              </div>

              {/* Hover overlay */}
              <div className="gallery-overlay absolute inset-0 bg-gradient-to-t from-navy-900/90 via-navy-900/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex flex-col justify-end p-4">
                <div className="flex items-center justify-between">
                  <span className="text-cyan-400 font-mono text-xs uppercase tracking-widest">{item.title}</span>
                  <ZoomIn className="w-4 h-4 text-cyan-400" />
                </div>
              </div>
            </div>

            <div className="mt-2 px-1">
              <h4 className="text-white font-semibold text-sm">{item.title}</h4>
              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-6 modal-backdrop bg-black/70"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card gradient-border rounded-2xl overflow-hidden max-w-2xl w-full"
            >
              <div className="aspect-video relative">
                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-navy-800 to-navy-900">
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      backgroundImage: 'linear-gradient(rgba(34,211,238,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.3) 1px, transparent 1px)',
                      backgroundSize: '30px 30px',
                    }}
                  />
                  <Camera className="w-16 h-16 text-cyan-400/40 relative z-10" />
                </div>
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 border border-cyan-400/40 flex items-center justify-center text-cyan-400 hover:bg-cyan-400/20 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="p-6">
                <p className="text-cyan-400 font-mono text-xs tracking-widest uppercase mb-2">{selected.title}</p>
                <p className="text-slate-300 text-sm leading-relaxed">{selected.caption}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
