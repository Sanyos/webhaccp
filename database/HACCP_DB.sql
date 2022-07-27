PGDMP     (                    z           postgres    14.3    14.3 !               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false                       1262    13754    postgres    DATABASE     h   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'Hungarian_Hungary.1250';
    DROP DATABASE postgres;
                postgres    false                       0    0    DATABASE postgres    COMMENT     N   COMMENT ON DATABASE postgres IS 'default administrative connection database';
                   postgres    false    3347                        3079    16384 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false                       0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            �            1259    16406 	   companies    TABLE     #  CREATE TABLE public.companies (
    company_id integer NOT NULL,
    company_name character varying(255),
    company_user_id integer,
    company_category character varying(255),
    company_address character varying(255),
    company_location character varying(255),
    company_phone character varying(255),
    company_headquarters character varying(255),
    company_billing_address character varying(255),
    company_registration_number character varying(255),
    company_vat_number character varying(255),
    company_archived boolean
);
    DROP TABLE public.companies;
       public         heap    postgres    false            �            1259    16405    companies_id_seq    SEQUENCE     �   ALTER TABLE public.companies ALTER COLUMN company_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.companies_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    213            �            1259    24586 	   documents    TABLE       CREATE TABLE public.documents (
    document_id integer NOT NULL,
    document_name character varying(255),
    document_date character varying(255),
    document_user_id integer,
    document_company_id integer,
    document_title character varying(255)
);
    DROP TABLE public.documents;
       public         heap    postgres    false            �            1259    24593    documents_document_id_seq    SEQUENCE     �   ALTER TABLE public.documents ALTER COLUMN document_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.documents_document_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    214            �            1259    24606    haccp    TABLE     �  CREATE TABLE public.haccp (
    haccp_id integer NOT NULL,
    haccp_unit_name character varying(255),
    haccp_company_location character varying(255),
    haccp_supply character varying(255),
    haccp_products_require_cold_storage character varying(255),
    haccp_require_keeping_warm boolean,
    haccp_preparatory character varying(255),
    haccp_storages character varying(255),
    haccp_refrigerator character varying(255),
    haccp_delivery boolean,
    haccp_delivery_method character varying(255),
    haccp_dressing_room boolean,
    haccp_cold_products boolean,
    haccp_egg character varying(255),
    haccp_glass_cleaner character varying(255),
    haccp_surface_disinfectant character varying(255),
    haccp_other_chemical character varying(255),
    haccp_hand_disinfectant character varying(255),
    haccp_2phase_dishwashing_detergent character varying(255),
    haccp_general_disinfectant character varying(255),
    haccp_scale_remover character varying(255),
    haccp_degreaser character varying(255),
    haccp_factory_dishwasher boolean,
    haccp_consumer_dishwasher character varying(255),
    haccp_disposable_consumer_container boolean,
    haccp_dish_washing_up character varying(255),
    haccp_have_haccp boolean,
    haccp_existing_haccp_date character varying(255),
    haccp_pest_control character varying(255),
    haccp_food_waste_transport character varying(255),
    haccp_municipal_waste_dispose character varying(255),
    haccp_entrances character varying(255),
    haccp_route_intersects boolean,
    haccp_place_of_receipt boolean,
    haccp_water_supply character varying(255),
    haccp_sewage_drain character varying(255),
    haccp_date character varying(255),
    haccp_user_id integer,
    haccp_company_id integer
);
    DROP TABLE public.haccp;
       public         heap    postgres    false            �            1259    24623    haccp_haccp_id_seq    SEQUENCE     �   ALTER TABLE public.haccp ALTER COLUMN haccp_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.haccp_haccp_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    216            �            1259    16399    users    TABLE       CREATE TABLE public.users (
    user_id integer NOT NULL,
    user_name character varying(255),
    user_email character varying(255),
    user_phone character varying(255),
    user_role character varying(255),
    user_password character varying(255),
    user_archived boolean
);
    DROP TABLE public.users;
       public         heap    postgres    false            �            1259    16404    users_id_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN user_id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    210            	          0    16406 	   companies 
   TABLE DATA                 public          postgres    false    213   �+       
          0    24586 	   documents 
   TABLE DATA                 public          postgres    false    214   �/                 0    24606    haccp 
   TABLE DATA                 public          postgres    false    216   �1                 0    16399    users 
   TABLE DATA                 public          postgres    false    210   F8                  0    0    companies_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.companies_id_seq', 17, true);
          public          postgres    false    212                       0    0    documents_document_id_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.documents_document_id_seq', 12, true);
          public          postgres    false    215                       0    0    haccp_haccp_id_seq    SEQUENCE SET     A   SELECT pg_catalog.setval('public.haccp_haccp_id_seq', 17, true);
          public          postgres    false    217                       0    0    users_id_seq    SEQUENCE SET     ;   SELECT pg_catalog.setval('public.users_id_seq', 22, true);
          public          postgres    false    211            q           2606    16410    companies companies_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT companies_pkey PRIMARY KEY (company_id);
 B   ALTER TABLE ONLY public.companies DROP CONSTRAINT companies_pkey;
       public            postgres    false    213            s           2606    24592    documents documents_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT documents_pkey PRIMARY KEY (document_id);
 B   ALTER TABLE ONLY public.documents DROP CONSTRAINT documents_pkey;
       public            postgres    false    214            u           2606    24612    haccp haccp_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_pkey PRIMARY KEY (haccp_id);
 :   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_pkey;
       public            postgres    false    216            m           2606    24605    users user_email 
   CONSTRAINT     Q   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_email UNIQUE (user_email);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT user_email;
       public            postgres    false    210            o           2606    16403    users users_pkey 
   CONSTRAINT     S   ALTER TABLE ONLY public.users
    ADD CONSTRAINT users_pkey PRIMARY KEY (user_id);
 :   ALTER TABLE ONLY public.users DROP CONSTRAINT users_pkey;
       public            postgres    false    210            x           2606    24599    documents company_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT company_fk FOREIGN KEY (document_company_id) REFERENCES public.companies(company_id) NOT VALID;
 >   ALTER TABLE ONLY public.documents DROP CONSTRAINT company_fk;
       public          postgres    false    214    213    3185            z           2606    24618    haccp haccp_company_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_company_id FOREIGN KEY (haccp_company_id) REFERENCES public.companies(company_id) NOT VALID;
 @   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_company_id;
       public          postgres    false    216    213    3185            y           2606    24613    haccp haccp_user_id    FK CONSTRAINT     �   ALTER TABLE ONLY public.haccp
    ADD CONSTRAINT haccp_user_id FOREIGN KEY (haccp_user_id) REFERENCES public.users(user_id) NOT VALID;
 =   ALTER TABLE ONLY public.haccp DROP CONSTRAINT haccp_user_id;
       public          postgres    false    210    216    3183            v           2606    16411    companies user_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.companies
    ADD CONSTRAINT user_fk FOREIGN KEY (company_user_id) REFERENCES public.users(user_id) NOT VALID;
 ;   ALTER TABLE ONLY public.companies DROP CONSTRAINT user_fk;
       public          postgres    false    213    3183    210            w           2606    24594    documents user_fk    FK CONSTRAINT     �   ALTER TABLE ONLY public.documents
    ADD CONSTRAINT user_fk FOREIGN KEY (document_user_id) REFERENCES public.users(user_id) NOT VALID;
 ;   ALTER TABLE ONLY public.documents DROP CONSTRAINT user_fk;
       public          postgres    false    210    214    3183            	   .  x��WMo�8��W����-����@�v`O-M������}C�r�d�>/�8�Ii޼7��Ū\މ���V�q�U�[e�VE^�˗�~��R쯍l�0����t%m��u�Ⱥv��!�-nR�"��5�}$Y?E��g?�(��پ\��V��Қ?Ml6��;^Ĥ�Վ�����\.�_�?���]�M��n�e���>\]����#-|��jU�u�K1�ԧ��uy�����֑h�	���/����xT��[����W��h4�Lxx��$qZ/��[������IS�2�¥Q^�x�)`q\s�Fn�)��0Z�-��Ez�����[`D�?��;�c�8�������Z����pq|�QSY ���we��W��e������"j�����V�?Ȋ faO@/��ŸC�� �?��ߤ��ΐNfc��O��&��<[�g7�ru7[/g�D�y�h�
rnBoЯ�b��L���h8N��ZmQ� !�J�A��Za�Z�&I��><�Ja�cwzV�Pu�i~&�����%9�r�
��8:9R��� ��A��'�)���y���齒E1�F�$��%�m!3�+UG�N�$y2A%y�q��@�GK%�5��7�����.z�F����=�;)�%X�I���NR�QlU�
�Q@HvH���Ѵ(:Va�(�N���4o�G���=�ަUoR��:V�A��3ҧ"�{J�߭���J����J��݃K0hk��
�>����g����%Z<�2)ƞ��Z�JӚKj=bE �%t!��"\u�V�{`~�dj�zjw��${�~���S����1����k�2��m�����g]�,���LY'��j�;��7�g.����S��ڀ�g�O��Z�s3E�?N���o�}z�R�b�٩%�ә0��w<x��_���rj�r��Ѝ,��ɾz_�L�Jͼ��%Ψ���d��\�\z٪}?��kbx�#ҟ����l�����ǣI1��ų��;c��~���P?%��y�˺3����w�{����m����� ���9.�v      
   �  x�Ք�j�0��y����`/M��Th�ݦ���=՞&�e�XJ ~��9���B_@�v���.��c��/뛑&OG���d��#/V�:Ei4��C��-�,�Z3S��>Ri��9i�x
w��d\�����F�0��s?:~�p2�A�0A����L�.��}���g�?�(��'M��tv�98�}�^v�o��W|	˹q�k���y^�tZ��T�N}��m��@��$�0�b�قI��i�?-�tN �}&��/��P�mI�d��0!0_�[a�
�L�X�{��;�U�����ʖGy;��
*�R��kLŒb$,��B��e+V���ju�O���]j�\Sh	J�Ukvyq��q��d�'�%_p���u������_d$xrxht��Vu���챒���y ��ھH�7�=�����/Yea�O��n>/���o[��8II�����O         b  x��Mo7���D/N�����)Г[+��Im'@O�ID���������]I��$'t�vgI.gH>�{vq5��g��D�fF��R�N<�S�<�*Y�V�Tʵ���S㔌��j���}��k��a��&iO�f�i�����T}����v1����Nz�
C�}�0V�{��\��2zEc�z?m).��U�)~�w�=Ckǫ��z�02��2$-��m?����F{sRQ�X���$?UKj���Z��6;�uKrK�[�ܽ�"��ep����/!D�u+Z����-ux��D9R����934��E��nZNk�S7���i�bz�C�B}=�)�Q��e͝k��H��EO��s���t�����Cs�j��9�Ji��Z��� �9§HwC���ߚہn11������	�^[Au���x�qryyvzv����z�V|<9�0)�W����sqp�x��ߟ�[i]8����$[a�1R`��`�/"�8�<	��h���e�6o|���6iA�����|.�	�Z�1�p����e�m?��*\|8?j����bQ*�����p�9�I~�Ft�FP$���K
0�ZAw�$gl#�6:#g�����7�����#�Z�"9 ���
+2B6g��NQ	��Ί�3������#�mH=�ūk��`���מr}~���3���[� 1�Mr��)
��<TLCc����(G ����<:z�����ϸ;~.~y�듳=����������g)4X󁚼�u��H�*��9�2/�7i!�[ ^�=3!CG�,�J��l�[_�s������҂L�6Vd�d�\���k\gG�����6R��u�_S����k�%{��S2(��h�ůlJ<3�1��z+!��$�[[��y�'J����:�`s 3�rf�o0Z���`�f��Pބ��/�j��w��=���~��~�e{I�;�L�B�����1�$�D��%e�|d$�����0w�3�h��l�¼g�:�G�ϱ�����?$�����e�3�O�M�\> d���,\�n���|w��n��\X���M6�*} �n��o!�T�x�(���C�a�v��n;��7k�^ߴ���<z��#f^��ն�{;��?�F��F}x����{H?NH�����Rr9+9��E2=z�ބ���+�mB�J�'���#�@�v��RG�S�H��x���a��4��6� ���M{��0�m����ȓ�2ڼ}��I5��ǒܝӒ�+�"+H�4n_%��A���z�i�%���X�n��jL�k3�ԯ��ޓzO��M�cN'S������#����9�ܪ|O�o�
���t_!Q�Ω�5���o��Oi�#rh5��Ep��`i{Z����'.|+���m�н�����Ad`�I��^�g��kW"t��*q���U���7)+2.k�ձq��{Ã:Ƞ��&���Mh?�`+������{5d��=�;�_����ϵֿ�}�b�]�^w���ʮ�{���<,{�xrG^�>LP;
֬��0<��ba"�<͈os��x#���"��.+�uC3��|����Ƹ~?�qb��o<�$ޅ�q�o{W��G��Q��yk��z��ײ�'O��:?         �  x�͓�N�@��<�H���Ҳ��
u������[�.m鶀�����UH����7��f�_fL�3\��o��X<�JNs.Dz��+�+��;I$f;���d��S���|���a���񊆗��k�Mo��#�ih�E\�+��)�`X6�����A��ѐ5EV�v[����"ו�ޔ��@��fP�pГ��ZR�C��Z���,���ͳ^����4�QKPF���0N/oj�y�hW�c������n�)-��Q����*cz�����PeUU[-(�R�c�:�1N��c�¤�=��x�w��(kJ�9i�|�C�]b�i�c���]���XoE�q��MY09�tC{+8�8���~�L���;-��H�H}(_�^'��D�g�&Hj��Y     