define(["./AttributeCompression-a99f24b9","./Cartesian2-5b63e672","./Color-821fa62a","./when-ca391574","./IndexDatatype-4e56bcfa","./Math-b53708b3","./OrientedBoundingBox-e61df120","./createTaskProcessorWorker","./Check-64f87f7d","./Transforms-5295b227","./RuntimeError-19cb26ba","./WebGLConstants-95ceb4e9","./EllipsoidTangentPlane-0fb66b96","./IntersectionTests-f5111308","./Plane-99b2becd"],function(ye,Ie,me,we,ve,xe,Ae,e,a,r,n,t,i,o,s){"use strict";var Ee=new Ie.Cartesian3,Ne=new Ie.Ellipsoid,Te=new Ie.Rectangle,ke={min:void 0,max:void 0,indexBytesPerElement:void 0};function Be(e,a,r){var n=a.length,t=2+n*Ae.OrientedBoundingBox.packedLength+1+function(e){for(var a=e.length,r=0,n=0;n<a;++n)r+=me.Color.packedLength+3+e[n].batchIds.length;return r}(r),i=new Float64Array(t),o=0;i[o++]=e,i[o++]=n;for(var s=0;s<n;++s)Ae.OrientedBoundingBox.pack(a[s],i,o),o+=Ae.OrientedBoundingBox.packedLength;var f=r.length;i[o++]=f;for(var d=0;d<f;++d){var c=r[d];me.Color.pack(c.color,i,o),o+=me.Color.packedLength,i[o++]=c.offset,i[o++]=c.count;var u=c.batchIds,h=u.length;i[o++]=h;for(var l=0;l<h;++l)i[o++]=u[l]}return i}var Le=new Ie.Cartesian3,Oe=new Ie.Cartesian3,Ue=new Ie.Cartesian3,Pe=new Ie.Cartesian3,Fe=new Ie.Cartesian3,Se=new Ie.Cartographic,Re=new Ie.Rectangle;return e(function(e,a){var r;t=e.packedBuffer,r=new Float64Array(t),t=0,ke.indexBytesPerElement=r[t++],ke.min=r[t++],ke.max=r[t++],Ie.Cartesian3.unpack(r,3,Ee),t+=Ie.Cartesian3.packedLength,Ie.Ellipsoid.unpack(r,t,Ne),t+=Ie.Ellipsoid.packedLength,Ie.Rectangle.unpack(r,t,Te);var n=new(2===ke.indexBytesPerElement?Uint16Array:Uint32Array)(e.indices),t=new Uint16Array(e.positions),i=new Uint32Array(e.counts),o=new Uint32Array(e.indexCounts),s=new Uint32Array(e.batchIds),f=new Uint32Array(e.batchTableColors),d=new Array(i.length),c=Ee,u=Ne,h=Te,l=ke.min,g=ke.max,b=e.minimumHeights,p=e.maximumHeights;we.defined(b)&&we.defined(p)&&(b=new Float32Array(b),p=new Float32Array(p));var C=t.length/2,y=t.subarray(0,C),I=t.subarray(C,2*C);ye.AttributeCompression.zigZagDeltaDecode(y,I);for(var m=new Float64Array(3*C),w=0;w<C;++w){var v=y[w],x=I[w],v=xe.CesiumMath.lerp(h.west,h.east,v/32767),x=xe.CesiumMath.lerp(h.south,h.north,x/32767),x=Ie.Cartographic.fromRadians(v,x,0,Se),x=u.cartographicToCartesian(x,Le);Ie.Cartesian3.pack(x,m,3*w)}var A=i.length,E=new Array(A),N=new Array(A),T=0,k=0;for(w=0;w<A;++w)E[w]=T,N[w]=k,T+=i[w],k+=o[w];var B=new Float32Array(3*C*2),L=new Uint16Array(2*C),O=new Uint32Array(N.length),U=new Uint32Array(o.length),P=[],F={};for(w=0;w<A;++w)_=f[w],we.defined(F[_])?(F[_].positionLength+=i[w],F[_].indexLength+=o[w],F[_].batchIds.push(w)):F[_]={positionLength:i[w],indexLength:o[w],offset:0,indexOffset:0,batchIds:[w]};var S,R=0,D=0;for(_ in F)F.hasOwnProperty(_)&&((G=F[_]).offset=R,G.indexOffset=D,R+=2*G.positionLength,D+=S=2*G.indexLength+6*G.positionLength,G.indexLength=S);var M=[];for(_ in F)F.hasOwnProperty(_)&&(G=F[_],M.push({color:me.Color.fromRgba(parseInt(_)),offset:G.indexOffset,count:G.indexLength,batchIds:G.batchIds}));for(w=0;w<A;++w){var _,G,Y=(G=F[_=f[w]]).offset,V=3*Y,H=Y,W=E[w],z=i[w],Z=s[w],j=l,q=g;we.defined(b)&&we.defined(p)&&(j=b[w],q=p[w]);for(var J=Number.POSITIVE_INFINITY,K=Number.NEGATIVE_INFINITY,Q=Number.POSITIVE_INFINITY,X=Number.NEGATIVE_INFINITY,$=0;$<z;++$){var ee=Ie.Cartesian3.unpack(m,3*W+3*$,Le);u.scaleToGeodeticSurface(ee,ee);var ae=u.cartesianToCartographic(ee,Se),re=ae.latitude,ne=ae.longitude,J=Math.min(re,J),K=Math.max(re,K),Q=Math.min(ne,Q),X=Math.max(ne,X),ae=u.geodeticSurfaceNormal(ee,Oe),re=Ie.Cartesian3.multiplyByScalar(ae,j,Ue),ne=Ie.Cartesian3.add(ee,re,Pe),re=Ie.Cartesian3.multiplyByScalar(ae,q,re),re=Ie.Cartesian3.add(ee,re,Fe);Ie.Cartesian3.subtract(re,c,re),Ie.Cartesian3.subtract(ne,c,ne),Ie.Cartesian3.pack(re,B,V),Ie.Cartesian3.pack(ne,B,V+3),L[H]=Z,L[H+1]=Z,V+=6,H+=2}(h=Re).west=Q,h.east=X,h.south=J,h.north=K,d[w]=Ae.OrientedBoundingBox.fromRectangle(h,l,g,u);var te=G.indexOffset,ie=N[w],oe=o[w];for(O[w]=te,$=0;$<oe;$+=3){var se=n[ie+$]-W,fe=n[ie+$+1]-W,de=n[ie+$+2]-W;P[te++]=2*se+Y,P[te++]=2*fe+Y,P[te++]=2*de+Y,P[te++]=2*de+1+Y,P[te++]=2*fe+1+Y,P[te++]=2*se+1+Y}for($=0;$<z;++$){var ce=$,ue=($+1)%z;P[te++]=2*ce+1+Y,P[te++]=2*ue+Y,P[te++]=2*ce+Y,P[te++]=2*ce+1+Y,P[te++]=2*ue+1+Y,P[te++]=2*ue+Y}G.offset+=2*z,G.indexOffset=te,U[w]=te-O[w]}for(var P=ve.IndexDatatype.createTypedArray(B.length/3,P),he=M.length,le=0;le<he;++le){for(var ge=M[le].batchIds,be=0,pe=ge.length,Ce=0;Ce<pe;++Ce)be+=U[ge[Ce]];M[le].count=be}return t=Be(2===P.BYTES_PER_ELEMENT?ve.IndexDatatype.UNSIGNED_SHORT:ve.IndexDatatype.UNSIGNED_INT,d,M),a.push(B.buffer,P.buffer,O.buffer,U.buffer,L.buffer,t.buffer),{positions:B.buffer,indices:P.buffer,indexOffsets:O.buffer,indexCounts:U.buffer,batchIds:L.buffer,packedBuffer:t.buffer}})});
